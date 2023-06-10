import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


const App = () => {

    return (
        <Router>
            <Header />
            < Home/> 
            <Footer />
        </Router>
            
    )
}

export default App
