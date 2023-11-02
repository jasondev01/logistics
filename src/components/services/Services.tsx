import { BsArrowRight } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <div className='container services__container'>
                <h2>Logistics Services</h2>
                <div className='services__items'>
                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/air.webp" alt="Air Freight Service" />
                            <h3>Air Freight</h3>
                        </div>
                        <p>
                            Need to send your packages instantly? Logistic's air freight services partners with 
                            leading airlines to get your packages delivered instantly anywhere in the world.
                        </p>
                        <a href="#">
                            Air Freight Services 
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/sea.webp" alt="Sea Freight Service" />
                            <h3>Sea Freight</h3>
                        </div>
                        <p>
                            Ship your large cargos over sea, and reduce costs for your business. 
                            Our sea freight services allow you to move your shipments efficiently, s
                            ecurely, and at a competitive rate.
                        </p>
                        <a href="#">
                            Sea Freight Services 
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/land.webp" alt="Land Freight Service" />
                            <h3>Land Freight</h3>
                        </div>
                        <p>
                            Reach any province and city in the Philippines with our 
                            land-freight services. Send your cargo nationwide with our 
                            fleet of container trucks and closed vans. 
                        </p>
                        <a href="#">
                            Land Freight Services 
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/door.webp" alt="Door to Door Service" />
                            <h3>Door-To-Door</h3>
                        </div>
                        <p>
                            A hassle-free way to send packages all over the country. 
                            Our door-to-door services offer you a convenient way to ship items 
                            by picking it up in your place and delivering it directly to your recipient. 
                        </p>
                        <a href="#">
                            Door-to-Door Services 
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/broker.webp" alt="Custom Brokerage Service" />
                            <h3>Customs Brokerage</h3>
                        </div>
                        <p>
                            Navigate the intricacies of customs taxes and duties 
                            with our customs brokers. Work with experts to 
                            ensure you get all the essential paperworks filed. 
                        </p>
                        <a href="#">
                            Brokerage Services
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                    <article className='services__item'>
                        <div className='services__detail-head'>
                            <img src="/assets/warehousing.webp" alt="Warehousing and Storage Service" />
                            <h3>Warehousing & Storage</h3>
                        </div>
                        <p>
                            Are you lacking space for your inventory? 
                            Rent a warehouse space with us, and enjoy 
                            our packing and delivery services as well. 
                        </p>
                        <a href="#">
                            Warehousing Services 
                            <BsArrowRight className='services__button-icon'/>
                        </a>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Services
