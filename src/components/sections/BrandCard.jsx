import React from 'react';

function BrandCard(props) {
    return (
        <>
            <img src={props.url} alt="" />
            <div className="content">
                <h3>{props.name }</h3>
                <a href="/" className="btn">check out</a>
            </div>
        </>
    );
}

export default BrandCard;