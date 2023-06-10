import React from 'react'
import Banner1 from '../../../assets/banner1.webp'
import Banner2 from '../../../assets/banner2.webp'
import Banner3 from '../../../assets/banner3.webp'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.css'

const Banner = () => {
    return (
        <Swiper 
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={40}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{
                delay: 8000,
                disableOnInteraction: true,
              }}
            pagination={{ clickable: true }}
            className='mySwiper'
        >   <SwiperSlide>
                <div id='#banner' className='banner'>
                    <img src={Banner1} alt="First Banner" />
                    <div className='container banner__container'>
                        <article className='banner__content'>
                            <p>Happiness in Every Cargo.</p>
                            <p>Expectations Delivered!</p>
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </article>
                    </div>
                </div>
            </SwiperSlide>
           
            <SwiperSlide>
                <div id='#banner' className='banner'>
                    <img src={Banner2} alt="Second Banner" />
                    <div className='container banner__container'>
                        <article className='banner__content'>
                            <p>We are ISO Certified!</p>
                            <p>Alagang Pamilya. Alagang Logistics. </p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </article>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div id='#banner' className='banner'>
                    <img src={Banner3} alt="Third Banner" />
                    <div className='container banner__container'>
                        <article className='banner__content'>
                            <p>We Do More than Logistics.</p>
                            <p>We Drive Your Business!</p>
                            <a href="#" className="btn btn-primary">Check Our Services</a>
                        </article>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner
