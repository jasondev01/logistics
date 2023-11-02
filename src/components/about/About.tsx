import { BsArrowRight } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <div className="container about__container">
                <div className="about__image">
                    <img src="/logistics/assets/about_img.webp" alt="A person signing a delivery receipt for a shipment from Logistics that arrived safely." />
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
                            <img src="/logistics/assets/check.webp" alt="Guaranteed" />
                            <p>Easy booking functionality</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src="/logistics/assets/truck.webp" alt="Guaranteed" />
                            <p>Hassle-free pick-up and delivery</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src="/logistics/assets/tracking.webp" alt="Guaranteed" />
                            <p>Real-time package tracking</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src="/logistics/assets/checklist.webp" alt="Guaranteed" />
                            <p>Logistics services made simple</p>
                        </div>
                        <div className='about__content-perk'>
                            <img src="/logistics/assets/globe.webp" alt="Guaranteed" />
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
