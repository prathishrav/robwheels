import React from 'react';
import "../../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
function ReviewCard(props) {
    return (
        <>
            <img src={props.url} alt="" />
            <div className="content">
                <p>
                    {props.irl}
                </p>
                <h3>{props.name}</h3>

                <div className="stars">
                    <i className=" fa-star">    <FontAwesomeIcon icon={faStar} /></i>
                    <i className=" fa-star">    <FontAwesomeIcon icon={faStar} /></i>
                    <i className=" fa-star">    <FontAwesomeIcon icon={faStar} /></i>
                    <i className=" fa-star">    <FontAwesomeIcon icon={faStar} /></i>
                    <i className=" fa-star">    <FontAwesomeIcon icon={faStarHalfAlt} /></i>
                </div>
            </div>
        </>

    );
}

export default ReviewCard;