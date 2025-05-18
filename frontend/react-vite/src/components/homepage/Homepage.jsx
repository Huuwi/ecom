import React, { useState } from 'react'
import axios from 'axios'
import Nav from '../nav-bar/Nav';
import Banner from '../banner/Banner'
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Homepage = () => {
    const [cateProduct, setCateProduct] = useState(0);

    const handleCateProduct = (ID) => {
        setCateProduct(ID);
    }

    return (
        <div>
            <Nav handleCateProduct={handleCateProduct} />
            <Banner />
            <Body cateProduct={cateProduct} />
            <Footer />
        </div>
    )
}

export default Homepage
