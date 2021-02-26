import React from 'react'
import './FoodStyle.scss';

export default function Food(props) {

    const cordinate = {
        left:`${props.food[0]}%`,
        top:`${props.food[1]}%`
    }

    return (
        <div className="food" style={cordinate}></div>
    )
}
