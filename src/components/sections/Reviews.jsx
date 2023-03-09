import React from 'react';
import reviews from '../helper/review.js'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper-slider.css";
import ReviewCard from './ReviewCard.jsx';

function Reviews(props) {

    let renderedReviews = reviews?.map((d, i) => {
        return (
            <SwiperSlide key={i}>
                <ReviewCard name={d.name} url={d.picture} irl={d.reviews} />
            </SwiperSlide>
        )
    })

    return (


        <section className="reviews" id="reviews">

            <h1 className="heading"> client's <span>review</span> </h1>

                    <Swiper
                        style={{
                            "--swiper-pagination-color": "gray",
                            "paddingBottom": "50px"
                        }}
                        spaceBetween={30}
                        pagination={true}
                        loop={true}
                        slidesPerView={3}
                        modules={[Pagination]}
                        className="mySwiper review-slider"
                    >

                        {renderedReviews}
                    </Swiper>

        </section>


    );
}

export default Reviews;




