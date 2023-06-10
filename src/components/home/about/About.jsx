import React from 'react'
import './about.css'
import AboutIMG from '../../../assets/about_img.webp'
import Perk1 from '../../../assets/check.webp'
import Perk2 from '../../../assets/truck.webp'
import Perk3 from '../../../assets/tracking.webp'
import Perk4 from '../../../assets/checklist.webp'
import Perk5 from '../../../assets/globe.webp'
import { BsArrowRight } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <div className="container about__container">
                <div className="about__image">
                    <img src={AboutIMG} alt="A person signing a delivery receipt for a shipment from Logistics that arrived safely." />
                </div>
                <article className='about__content'>
                    <div className='about__content-title'>
                        <h1>Logistics: Your Trusted Logistics Company In The Philippines</h1>
                        <span>Happiness in every cargo. Expectations delivered!</span>
                    </div>
                    
                    <p>
                    Logistics Padala Express Forwarding Services Corp. is an ISO-certified logistics company in the Philippines. Powered by cutting-edge logistics technology, we guarantee you top-of-class logistics servicing.
                    </p>

                    <div className='about__content-perks'>
                        <div className='about__content-perk'>
                            <img src={Perk1} alt="Guaranteed" />
                            <p>Easy booking functionality</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src={Perk2} alt="Guaranteed" />
                            <p>Hassle-free pick-up and delivery</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src={Perk3} alt="Guaranteed" />
                            <p>Real-time package tracking</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src={Perk4} alt="Guaranteed" />
                            <p>Logistics services made simple</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src={Perk5} alt="Guaranteed" />
                            <p>Global cargo delivery</p>
                        </div>
                    </div>

                    <a href="#" className='btn btn-primary'>Learn More <BsArrowRight className='about__button-icon'/> </a>
                </article>
            </div>
        </section>
    )
}

export default About
