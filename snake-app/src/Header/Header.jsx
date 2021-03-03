import React from 'react';
import Lives from './Lives/Lives';
import './HeaderStyle.scss';
import soundsOff from '../assets/icons/soundsOff.svg';
import soundsOn from '../assets/icons/soundsOn.svg';
import musicOff from '../assets/icons/musicOff.svg';
import musicOn from '../assets/icons/musicOn.svg';

export default function Header(props) {
    let {music,turnOnSounds,turnOffSounds,musicVolumUp,musicVolumDown,soundsVolumUp,soundsVolumDown} = props;
    
    return (
        <div className="header">
            <div className="header__options">
                <button onClick={()=> music.pause()}>
                    <img src={musicOff} alt="musicOff"/>
                </button>
                <button onClick={()=> music.play()}>
                    <img src={musicOn} alt="musicOn"/>
                </button>
                <button onClick={()=> turnOffSounds()}>
                    <img src={soundsOff} alt="soundsOff"/>
                </button>
                <button onClick={()=> turnOnSounds()}>
                    <img src={soundsOn} alt="soundsOn"/>
                </button>
                <button onClick={() =>musicVolumUp()}>Music volume Up</button>
                <button onClick={() =>musicVolumDown()}>Music volume Down</button>
                <button onClick={() => soundsVolumUp()}>Sounds volume Up</button>
                <button onClick={() => soundsVolumDown()}>Sounds volume Down</button>
            </div>
            <div className="header__info">
                <div className="score">Score:<span>{props.score}</span></div>
                <div className="high-score">High Score:<span>{localStorage.getItem(`highScore`) && localStorage.getItem("highScore").split(",")[0]}</span></div>
                <Lives lives={props.lives}/>
            </div>
        </div>
    )
}
