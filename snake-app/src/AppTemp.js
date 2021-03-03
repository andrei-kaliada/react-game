import React from 'react';
import Snake from './Snake/SnakeComponent';
import Food from './Food/Food';
import Header from './Header/Header';
import deadAudio from './assets/audio/dead.mp3';
import eatAudio from './assets/audio/eat.mp3';
import upAudio from './assets/audio/up.mp3';
import downAudio from './assets/audio/down.mp3';
import leftAudio from './assets/audio/left.mp3';
import rightAudio from './assets/audio/right.mp3';
import mainSoundAudio from './assets/audio/mainSound.mp3';

class AppTemp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      snakeCordinates:[
        [0,0],
        [4,0]
      ],
      food:this.setRandomCordinates(),
      direction:'RIGHT',
      speed:100,
      lives:3,
      score:0,
      hightScore:0,
       dead:new Audio(),
       eat:new Audio(),
       up:new Audio(),
       right:new Audio(),
       left:new Audio(),
       down:new Audio(),
       mainSound:new Audio(),
       timer:0,
       popUp:false,
       isSounds:true
       
    }


    this.state.dead.src = deadAudio;
    this.state.eat.src = eatAudio;
    this.state.up.src = upAudio;
    this.state.right.src = rightAudio;
    this.state.left.src = leftAudio;
    this.state.down.src = downAudio;
    this.state.mainSound.src = mainSoundAudio;

  }

  componentDidMount(){
   this.state.timer = setInterval(this.movementsSnake,this.state.speed)
      document.onkeydown = this.setKey;
      this.state.mainSound.play();
     
  }


  componentWillUnmount(){
      clearInterval(this.state.speed)
  }

  componentDidUpdate(){
    this.collisionWalls();
    this.collisionSnake();
    this.collisionEat();
    
  }



  setRandomCordinates = () => {
    let min = 1;
    let max = 90;
    let x = Math.floor((Math.random() * (max - min + 2) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 2) + min) / 2) * 2;
   

    return [x, y];
  }

  setKey = (e)=> {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({ direction: "UP" });
          if(this.state.isSounds){
            this.state.up.play();
          }
          
        }
        break;
      case 40:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({ direction: "DOWN" });
          if(this.state.isSounds){
            this.state.down.play();
          }
          
        }
        break;
      case 37:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({ direction: "LEFT" });
          if(this.state.isSounds){
             this.state.left.play();
          }
         
        }
        break;
      case 39:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({ direction: "RIGHT" });
          if(this.state.isSounds){
            this.state.right.play();
          }
          
        }
        break;
      case 13:
        this.restartGame();
        break;
    }
  };

 

  movementsSnake = () => {
    let square = [...this.state.snakeCordinates];
    let front = square[square.length - 1];

    switch(this.state.direction){
      case 'RIGHT':
        front = [front[0] + 2, front[1]];
        break;
      case 'DOWN':
        front = [front[0], front[1] + 2];
        break;
      case 'LEFT':
        front = [front[0] - 2, front[1]];
        break; 
      case 'UP':
        front = [front[0], front[1] - 2];
        break;   
    }
    square.push(front);
    square.shift();
    this.setState({snakeCordinates:square});
  }


  // Collisions functions

  collisionWalls = () => {
    let front = this.state.snakeCordinates[this.state.snakeCordinates.length - 1];
    if(front[0] >= 100 || front[1] >= 100 || front[0] < 0 || front[1] < 0){
      if(this.state.lives == 1){
        let scoreKey = `highScore`;
        let lastData = localStorage.getItem(scoreKey) || "";
        console.log(lastData);

        let intData = lastData != "" ? lastData.split(",").map(el => +el) : [];
        console.log(intData);
        intData.push(this.state.score);
        intData.sort((a,b) => b - a);
        console.log(intData);
        let mainCount = intData.length > 10 ? 10 : intData.length;
        let mainResult = intData.splice(0,mainCount);
        
        
        localStorage.setItem(scoreKey,`${mainResult.join(',')}`);
        if(this.state.isSounds){
          this.state.dead.play(); 
        }
        this.state.mainSound.pause();
        clearInterval(this.state.timer);
        this.setState({popUp:true});
        
      }
      if(this.state.isSounds){
        this.state.dead.play();
      }
      this.removeLive();
      this.endGame();

    }
  }

  collisionSnake = () => {
    let square = [...this.state.snakeCordinates];
    let front = square[square.length - 1];
    square.pop();

    square.forEach(el => {
      if(front[0] == el[0] && front[1] == el[1]){
        if(this.state.isSounds){
          this.state.dead.play();
        }
        this.endGame();
        this.removeLive();
        
      }
    })
  }

  collisionEat = () => {
    let front = this.state.snakeCordinates[this.state.snakeCordinates.length - 1];
    let food = this.state.food;
    
    if(front[0] == food[0] && front[1] == food[1]){
      if(this.state.isSounds){
        this.state.eat.play();
      }
        
      this.setState({
        food:this.setRandomCordinates(),
        score:this.state.score+10,
        
      });
      this.growSnake();
    }
  }

  growSnake = () => {
    let newSquares = [...this.state.snakeCordinates];
    newSquares.unshift([]);
    this.setState({snakeCordinates:newSquares});
  }

  removeLive = () => {
    this.setState({lives:this.state.lives - 1});
  }


  
  endGame = () => {
    this.setState({
        snakeCordinates:[
          [0,0],
          [4,0]
        ],
        direction:'RIGHT',
    })  
    
  }

  restartGame = () => {
    
    this.setState((state) => {
      return {popUp:false};
    });
    this.props.startGame(false);
    
  }

  turnOnSounds = () => {
    this.setState((state) => {return{isSounds:true}})
  }
  
  turnOffSounds = () => {
    this.setState((state) => {return{isSounds:false}})
  }

  musicVolumUp = () => {
    if(this.state.mainSound.volume < 1){
      this.state.mainSound.volume += 0.2;
    }
  
  }

  musicVolumDown = () => {
    if(this.state.mainSound.volume >= 0.2){
      this.state.mainSound.volume -= 0.2;
    }
  
  }

  soundsVolumDown = () => {
    let soundsArr = [this.state.up,this.state.down,this.state.left,this.state.right,this.state.eat,this.state.dead];
    soundsArr.forEach(el => {
      if(el.volume >= 0.2){
        el.volume -= 0.2;
      }
    })
  }


  soundsVolumUp = () => {
    let soundsArr = [this.state.up,this.state.down,this.state.left,this.state.right,this.state.eat,this.state.dead];
    soundsArr.forEach(el => {
      if(el.volume < 1){
        el.volume += 0.2;
      }
    })
  }

  

  render(){
    
    return (
      <>
         <div className="wrapper">
          <Header
           lives={this.state.lives}
           score={this.state.score}
           hightScore={this.state.hightScore}
           music={this.state.mainSound}
           turnOnSounds={this.turnOnSounds}
           turnOffSounds={this.turnOffSounds}
           musicVolumUp={this.musicVolumUp}
           musicVolumDown={this.musicVolumDown}
           soundsVolumUp={this.soundsVolumUp}
           soundsVolumDown={this.soundsVolumDown}
           />
          <div className="area">
            <Snake snakeCordinates={this.state.snakeCordinates}/>
            <Food food={this.state.food}/>
          </div>
          { this.state.popUp ? 
         <>
           <div className="popUp">
            <div className="popUp__header">
              <h2 className="popUp__header-title">Game over</h2>
              <div className="popUp__header-subtitle">High score table:</div>
            </div>
            
                <div className="popUp__body">
                  <ul className="popUp__list">
                    {localStorage.getItem(`highScore`) && localStorage.getItem(`highScore`).split(",").map((el, index) => {
                    
                      return(
                        <li className="popUp__list-item" key={index}>{`${index+1}) ${el}`}</li>
                      );
                    })} 
                  </ul>
                </div> 
                <div className="popUp__footer">
                  <div className="popUp__footer-text">Press <span>Enter</span> to restart Game</div>
                </div>
            </div>
            <div className="darkWrapper"></div>
         </>
            : "" 
           }
          {/* <button onClick={()=>clearInterval(this.state.timer)}>Pause</button> */}
         
        </div>
      </>
    );
  };
}

export default AppTemp;
