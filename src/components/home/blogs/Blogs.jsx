import React from 'react'
import './blogs.css'
import Blog1 from '../../../assets/blog1.webp'
import Blog2 from '../../../assets/blog2.webp'
import Blog3 from '../../../assets/blog3.webp'
import Blog4 from '../../../assets/blog4.webp'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";

const data = [
    {   
        id: 1,
        image: Blog1,
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit exercitationem quisquam dolores tempora molestias.',
        link: '#'
    },
    {   
        id: 2,
        image: Blog2,
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit exercitationem quisquam dolores tempora molestias.',
        link: '#'
    },
    {   
        id: 3,
        image: Blog3,
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit exercitationem quisquam dolores tempora molestias.',
        link: '#'
    },
    {   
        id: 4,
        image: Blog4,
        preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit exercitationem quisquam dolores tempora molestias.',
        link: '#'
    }
]

const Blogs = () => {
    return (
        <section id='blogs'>
            <div className="container blog__container">
                <h2>BLOGS</h2>
                <article className='blogs__items '>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={40}
                        slidesPerView={3}
                        loop={false}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow]}
                        className='mySwiper'
                    >
                        {
                        data.map( ({id, image, preview, link}) => {
                            return (
                                <SwiperSlide key={id}>
                                     <div className="blogs__item">
                                        <img src={image} alt={preview} />
                                        <p>
                                            {preview}
                                        </p>
                                        <a href={link} className='btn btn-primary'>Read More</a>
                                    </div>
                                </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                   
                </article>
            </div>
        </section>
    )
}

export default Blogs
