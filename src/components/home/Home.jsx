import React from 'react'
import './home.css'
import Logistics from './logistics/Logistics'
import Services from './services/Services'
import Certified from './certified/Certified'
import Blogs from './blogs/Blogs'
import Reviews from './reviews/Reviews'
import Banner from './banner/Banner'
import About from './about/About'

const Home = () => {
    return (
        <>
            <Banner />
            <Logistics />
            <About />
            <Services />
            <Certified />
            <Blogs />
            <Reviews />
        </>
    )
}

export default Home
