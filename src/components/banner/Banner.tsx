import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper 
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
            modules={[Navigation, Pagination, Autoplay, EffectFade]}

        >   <SwiperSlide>
                <div id='#banner' className='banner'>
                    <img src="/assets/banner1.webp" alt="Happiness in Every Cargo" />
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
                    <img src="/assets/banner2.webp" alt="We are ISO Certified!" />
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
                    <img src="/assets/banner3.webp" alt="We Drive Your Business!" />
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
