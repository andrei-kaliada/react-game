import React from 'react';
import Snake from './Snake/SnakeComponent';
import Food from './Food/Food';
import Lives from './Lives/Lives';

class App extends React.Component {
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
      redyGame:true
    }
  }


  componentDidMount(){
    setInterval(this.movementsSnake,this.state.speed)
      document.onkeydown = this.setKey;
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
    console.log('X:',x);
    console.log('Y:',y);

    return [x, y];
  }

  setKey = (e)=> {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({ direction: "UP" });
        }
        break;
      case 40:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({ direction: "DOWN" });
        }
        break;
      case 37:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({ direction: "LEFT" });
        }
        break;
      case 39:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({ direction: "RIGHT" });
        }
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
        alert('Game over');
        document.location.reload();
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
        this.endGame();
        this.removeLive();
      }
    })
  }

  collisionEat = () => {
    let front = this.state.snakeCordinates[this.state.snakeCordinates.length - 1];
    let food = this.state.food;
    
    if(front[0] == food[0] && front[1] == food[1]){
     
      this.setState({
        food:this.setRandomCordinates()
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

  render(){
    return (
      <>
        {!this.state.redyGame ? <button onClick={()=>this.setState({redyGame:true})}>Start Game</button> :
        <div className="wrapper">
          <Lives lives={this.state.lives}/>
          <div className="area">
            <Snake snakeCordinates={this.state.snakeCordinates}/>
            <Food food={this.state.food}/>
          </div>
        </div>

        }
      </>
    );
  };
}

export default App;
