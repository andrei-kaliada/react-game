import React from 'react';
import AppTemp from './AppTemp';
import arrowLeft from './assets/icons/arrowLeft.svg';
import arrowRight from './assets/icons/arrowRight.svg';
import arrowUp from './assets/icons/arrowUp.svg';
import arrowDown from './assets/icons/arrowDown.svg';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      redyGame:false,
    }

  }

  componentDidMount(){
    
      document.onkeydown = this.setKey;
  }
  

  startGame = (value) => {

    this.setState({redyGame:value})
  }

  setKey = (e) => {
    e = e || window.event;
    if(e.keyCode === 13){
      this.startGame(true)
      
    }
  }


  render(){
console.log(this.state.startGame);
    return(
      <div className="wrappApp">
        {
          !this.state.redyGame ?
          <div className="card">
            <div className="content-wrapper">
              <h2 className="heading">Welcome to the snake game</h2>
              <div className="controls">
                <div className="controls__title">Controls:</div>
                <div className="controls__buttons">
                  <div className="controls__buttons-left">
                    <img src={arrowUp} alt="arrowUp"/>
                    <div className="descr">Press Up</div>
                  </div>
                  <div className="controls__buttons-right">
                    <img src={arrowRight} alt="arrowRight"/>
                    <div className="descr">Press Right</div>
                  </div>
                  <div className="controls__buttons-up">
                    <img src={arrowLeft} alt="arrowLeft"/>
                    <div className="descr">Press Left</div>
                  </div>
                  <div className="controls__buttons-down">
                    <img src={arrowDown} alt="arrowDown"/>
                    <div className="descr">Press Down</div>
                  </div>
                </div>
              </div>
            </div>
            <a onClick={()=>this.startGame(true)} className="button">Start Game</a>
          </div>
           :
          <AppTemp startGame={this.startGame}/>
        }
      </div>
    );
  }
}

export default App;
