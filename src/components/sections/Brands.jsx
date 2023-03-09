import React from 'react';
import brands from '../helper/brands.js'
import "../../styles/style.css"
import {  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper-slider.css";
import BrandCard from './BrandCard.jsx';

function Brands(props) {

    let renderedBrands = brands?.map((d, i) => {
        return (
            <SwiperSlide key={i}>
                <BrandCard name={d.name} url={d.image} />
            </SwiperSlide>
        )
    })

    return (
        <section className="featured" id="featured">
            <h1 className="heading"> <span>brands of</span> bikes</h1>
            <div className="swiper featured-slider">
            <Swiper
                    style={{
                        "--swiper-pagination-color": "gray",
                        "paddingBottom":"50px"
                    }}
                    spaceBetween={30}
                    pagination={true}
                    loop={true}
                    slidesPerView={4}
                    modules={[ Pagination]}
                    className="mySwiper vehicles-slider"
                >
                    
                    {renderedBrands}
                </Swiper>
               
            </div>

        </section>
    );
}

export default Brands;