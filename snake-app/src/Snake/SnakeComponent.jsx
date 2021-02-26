import React from 'react';
import './SnakeStyle.scss';

export default function SnakeComponent(props) {
    return (
        <div>
            {props.snakeCordinates.map((cordinate, index) => {
                
                const points = {
                    left:`${cordinate[0]}%`,
                    top:`${cordinate[1]}%`,
                }

                return(
                    <div key={index} className="snake-cordinates" style={points}></div>
                );
            }
        )}
        </div>
    )
}
