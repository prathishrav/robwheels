import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'

function Bike(props) {
    return (
        
            <div className='bike-wrapper'>
                <img src={props.url} alt=""/>
                <div className="content">
                    <h3>{props.name}</h3>
                    <div className="price"> <span>price : </span> Rs.{props.price}/- </div>
                    <p>
                        
                        <span><FontAwesomeIcon icon={faCircle}/></span> {props.year}
                        <span><FontAwesomeIcon icon={faCircle}/></span> {props.cc} cc
                        <span><FontAwesomeIcon icon={faCircle}/></span> petrol
                        <span><FontAwesomeIcon icon={faCircle}/></span> {props.km} km
                    </p>
                    <a href={`/details/${props.id}`} className="btn">check out</a>
                </div>
            </div>
    );
}

export default Bike;