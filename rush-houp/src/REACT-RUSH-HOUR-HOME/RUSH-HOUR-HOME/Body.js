import React from 'react';
import "./HOME-CSS/Body.css";
import Map  from "./Map"
import CAR_PLAYER from './CAR-PLAYER';
function Body(){
    return(
        <div className='body'>
            <Map/>
            <CAR_PLAYER/>
        </div>
    );
}

export default Body