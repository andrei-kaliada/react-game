import React from 'react'

export default function Lives(props) {
   
//    const lives = Array(props.lives);
//    console.log(lives);
    return (
        <div>
            Lives:<span className="lives">{props.lives}</span>
        </div>
    )
}
