import React from 'react'
import './footer.css'
import Logo from '../../assets/logistics.png'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        
        <section id='footer'>
            <div className='footer__overlay'></div>
            <div className='container footer__container'>
                <div className='footer__box'>
                    <img src={Logo} alt="Logistics Logo" />
                    <a href='#'>Bldg. 10B, Central International Commercial Complex, Malakanyang Road, Manila City, 1302 Philippines</a>
                </div>
                <div className="footer__box">
                    <div className="footer__box-number">
                        <h4>Call Us Now</h4>
                        <a href="tel:283963333">(02) 8396 - 3333 </a>
                    </div>
                    <div className="footer__box-emails">
                        <h4>Email Us</h4>
                        <a href="mailto:#">sales@logistics.com.ph</a>
                        <a href="mailto:#">support@logistics.com.ph</a>
                        <a href="mailto:#">hr@logistics.com.ph</a>
                        <a href="mailto:#">feedback@logistics.com.ph</a>
                    </div>
                </div>
                <div className='footer__box'>
                    <h4>Helpful Links</h4>
                    <a href="#">Air Freight Services</a>
                    <a href="#">Sea Freight Services</a>
                    <a href="#">Land Freight Services</a>
                    <a href="#">Door-To-Door Services</a>
                    <a href="#">Custom Brokerage</a>
                    <a href="#">Warehouse and Storage</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="footer__box">
                    <h4>Connect With Us</h4>
                    <ul className='footer__socials'>
                        <li className='footer__social'>
                            <a href="#">
                                <BsFacebook className='footer__social-icon'/>
                            </a>
                        </li>
                        <li className='footer__social'>
                            <a href="#">
                                <BsYoutube className='footer__social-icon'/>
                            </a>
                        </li>
                        <li className='footer__social'>
                            <a href="#">
                                <BsLinkedin className='footer__social-icon'/>
                            </a>
                        </li>
                        <li className='footer__social'>
                            <a href="#">
                                <BsInstagram className='footer__social-icon'/>
                            </a>
                        </li>
                    </ul>
                    <div className='footer__policy'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Condition</a>
                        <a href="#">Frequently Asked Questions</a>
                        <a href="#">Prohibited And Regulated Items</a>
                    </div>
                </div>
            </div>
            <section className='footer__end'>
                <span>
                    © 2023 Logistic Padala Express Forwarding Services Corp.
                </span>
            </section>
        </section>
        
    )
}

export default Footer
