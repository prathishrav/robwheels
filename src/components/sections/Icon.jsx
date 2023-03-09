import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding,faMotorcycle,faUsers} from '@fortawesome/free-solid-svg-icons'

function Icon(props) {
    return (
        <>
        
<section className="icons-container">

<div className="icons">
   <i><FontAwesomeIcon icon={faBuilding} size="1x" /></i>

    <div className="content">
        <h3>1000+</h3>
        <p>stations</p>
    </div>
</div>

<div className="icons">
<i><FontAwesomeIcon icon={faMotorcycle} size="1x" /></i>
    <div className="content">
        <h3>3000+</h3>
        <p>bikes sold</p>
    </div>
</div>

<div className="icons">
<i><FontAwesomeIcon icon={faUsers} size="1x" /></i>
    <div className="content">
        <h3>320+</h3>
        <p>happy clients</p>
    </div>
</div>



</section>
            
        </>
    );
}

export default Icon;