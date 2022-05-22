import React from 'react';
import "./HOME-CSS/Car.css";
function CAR_PLAYER(){
    const onGoing = {
        getComputedStyle
    }
    return(
        <div>
            <img className='Player' onClick={onGoing} src='RUSH_HOUR_IMG/red_tank.png'/>
        </div>
    );
}

export default CAR_PLAYER

