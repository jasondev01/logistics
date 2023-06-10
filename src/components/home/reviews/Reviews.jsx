import React from 'react'
import './reviews.css'
import Review1 from '../../../assets/review1.webp'
import Review2 from '../../../assets/review2.webp'
import Review3 from '../../../assets/review3.webp'
import Review4 from '../../../assets/review4.webp'
import { FaQuoteLeft } from 'react-icons/fa'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from 'swiper';

const data = [
    {
        image: Review1,
        name: 'John Michelle',
        review: `'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eius?'`,
    },
    {
        image: Review2,
        name: 'Catherine Doe',
        review: `'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eius?'`,
    },
    {
        image: Review3,
        name: 'Brittany John',
        review: `'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa libero pariatur ipsum quos consequuntur in.'`,
    },
    {
        image: Review4,
        name: 'John Chiang',
        review: `'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eius? dolor sit amet consectetur.'`,
    },
]

function Reviews() {
    return (
        <section id='reviews'>
            <div className='background__overlay'></div>
            <div className="container reviews__container">
                <div className='reviews__title'>
                    <h2>
                        Logistics Customer Reviews For Our Logistics Service
                    </h2>
                </div>
                <Swiper
                    modules={[ Autoplay ]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                      }}
                    slidesPerView={1}
                    grabCursor={true}
                    loop={true}
                    className="mySwiper reviews"
                >
                    {
                        data.map( ({image, name, review}, index) => {
                            return (
                                <SwiperSlide key={index} className='reviews__content'>
                                    <FaQuoteLeft className='reviews__quote'/>
                                    <div className='reviews__icon'>
                                        <img src={image} alt={name} />
                                    </div>
                                    <small>{name}</small>
                                    <p>
                                        {review}
                                    </p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Reviews
