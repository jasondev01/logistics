
import { FaQuoteLeft } from 'react-icons/fa'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const data = [
    {
        image: "/assets/review1.webp",
        name: 'John Michelle',
        review: `'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eius?'`,
    },
    {
        image: "/assets/review2.webp",
        name: 'Catherine Doe',
        review: `'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eius?'`,
    },
    {
        image: "/assets/review3.webp",
        name: 'Brittany John',
        review: `'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa libero pariatur ipsum quos consequuntur in.'`,
    },
    {
        image: "/assets/review4.webp",
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
                    className="reviews"
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
