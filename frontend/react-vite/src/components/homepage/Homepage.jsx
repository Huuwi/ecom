import React from 'react'
import axios from 'axios'
import Nav from '../nav-bar/Nav';
import Banner from '../banner/Banner'
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Homepage = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Body />
            <Footer />
        </div>
    )
}

export default Homepage
