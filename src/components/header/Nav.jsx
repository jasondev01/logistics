import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logistics.png'

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setIsNavbarVisible(true);
            } else if ( currentScrollPos == 0 ) {
                setIsNavbarVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${isNavbarVisible ? 'sticky' : ''}`}>
            <div className="container navbar__container">
                <div className={`navbar__logo ${isNavbarVisible ? 'sticky' : ''}`}>
                    <img src={Logo} alt="Website Logo" />
                </div>
                <ul className={`navbar__menu ${isMenuOpen ? 'show' : ''}`}>
                    <li className='menu__item'>
                        <a href="#">Home</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">About Us</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Services</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Branches</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Book</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Blog</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Gallery</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Contact</a>
                    </li>
                    <li className='menu__item'>
                        <a href="#">Careers</a>
                    </li>
                    <li className='menu__item'>
                        © 2023 Logistic Padala Express Forwarding Services Corp.
                    </li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'show' : ''}`}  onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

                
            </div>
        </nav>
    )
}

export default Nav
