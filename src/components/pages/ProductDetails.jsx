import React, { useEffect, useState } from 'react';
import "../../styles/detail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bikes from '../helper/data.js'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom';

function ProductDetails(props) {
    const [amount, setAmount] = useState("")
    const imgs = document.querySelectorAll('.thumbnail');
    let imgId = 1;
    let {name} = useParams();
    let user=JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        thumbSlider()
    })
    let currentBike = bikes?.find((b)=>{
        let bike = b.id === name
        return bike 
    })

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
    function thumbSlider(){
        imgs.forEach((imgItem) => {
            imgItem.addEventListener('click', () => {
                console.log("clicked")
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });
    }
    
    window.addEventListener('resize', slideImage);

   const API_URL = "http://localhost:8080/api/orders/";
    
   let createOrders = (e) => {
    e.preventDefault()
    if(user){
        let orderData={
            bikeId:currentBike?.id,
            userId:user.id,
            amount:amount,
            email:user.email
        }
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        }).then(response => response.json()).then(data => {
            console.log(data);
        })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }else{
        alert('please login to BID NOW')
    }

}


    return (<>
        <div style={{marginTop:"100px", textAlign:"center", fontSize:"22px"}}>
            <h1>BIKE DETAILS</h1>
        </div>
        <div className="card-wrapper" >
            <div className="card">
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            <img src={currentBike?.images[0]} alt="bike" />
                            <img src={currentBike?.images[1]} alt="bike" />
                            <img src={currentBike?.images[2]} alt="bike" />
                            <img src={currentBike?.images[3]} alt="bike" />

                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <div className='thumbnail' data-id="1">
                            <img src={currentBike?.images[0]} alt="bike" />
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' data-id="2">
                            <img src={currentBike?.images[1]} alt="bike" />
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' data-id="3">
                            <img src={currentBike?.images[2]} alt="bike" />
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' data-id="4">
                            <img src={currentBike?.images[3]} alt="bike" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <h2 className="product-title">{currentBike?.model}</h2>
                    <div className="product-price">
                        <p className="new-price">STARTING PRICE: <span>Rs {currentBike?.price}</span></p>
                    </div>
                    <div className="product-detail">

                        <ul>
                        <li>cc: <span>{currentBike?.cc}</span></li>
                        <li>Mileage: <span>{currentBike?.mileage}</span></li>
                            <li>Color: <span>{currentBike?.color}</span></li>
                            <li>Ownership: <span>{currentBike?.ownership}</span></li>
                            <li>Kilometer Driven: <span> {currentBike?.km}</span></li>
                            <li>bikeno: <span> {currentBike?.bikeno}</span></li>
                            <li>Year <span>{currentBike?.year}</span></li>
                            <li>Address <span>{currentBike?.address}</span></li>
                        </ul>
                    </div>

                    <div className="purchase-info">
                        <form onSubmit={(e)=>{createOrders(e)}}>
                        <input required type="number" min={currentBike?.price} value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                        <input type="submit" className="btn"

                            value='BID NOW'/>
                        </form>

                    </div>

                    <div className="social-links">
                        <p>Share At: </p>
                    
                        <a href="/">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                        </a>
                        <a href="/">
                        <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default ProductDetails;