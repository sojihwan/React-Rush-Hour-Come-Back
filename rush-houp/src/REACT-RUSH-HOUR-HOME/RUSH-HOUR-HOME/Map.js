import React from 'react';
import "./HOME-CSS/Body.css";
import CAR_PLAYER from './CAR-PLAYER';
function Map(){
    return(
    <div>
        <table className='Map'>
            <tr>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
                <td>
                    <div className='Primitive'></div>
                </td>
            </tr>
        <CAR_PLAYER/>
        </table>
    </div>
    );
}

export default Map