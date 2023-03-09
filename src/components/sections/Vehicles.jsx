import React from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";

import "../../styles/swiper-slider.css";
import bikes from '../helper/data.js'
import Bike from './Bike';

function Vehicles(props) {
    let renderedVehicles = bikes?.map((d, i) => {
        return (
            <SwiperSlide key={i}>
                <div className="swiper-zoom-container">
                    <Bike year={d.year} name={d.name} url={d.image} price={d.price} cc={d.cc} km={d.km} id={d.id} />
                </div>
            </SwiperSlide>
        )
    })

    const swiperOptions = {
        centeredSlides: true, // Center active slide
        slidesPerView: 3, // Show multiple slides at once
        spaceBetween: 50, // Add space between slides
      };

    return (
        <div>
            <section className="vehicles" id="vehicles">

                <h1 className="heading"> Available <span>vehicles</span> </h1>
                <Swiper
                {...swiperOptions}
                    style={{
                       paddingBottom:0
                    }} 
                    centeredSlides={true}
                    loop={true}
                    className="mySwiper vehicles-slider"
                >
                    {renderedVehicles}
                </Swiper>
            </section>
        </div>
    );
}

export default Vehicles;