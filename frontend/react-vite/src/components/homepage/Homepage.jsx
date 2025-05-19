import React, { useState } from 'react'
import axios from 'axios'
import Nav from '../nav-bar/Nav';
import Banner from '../banner/Banner'
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Homepage = () => {
    const [cateProduct, setCateProduct] = useState(0);

    const [favProduct, setFavProduct] = useState(0);

    const handleCateProduct = (ID) => {
        setCateProduct(ID);
    }

    const handleFavProduct = (status) => {
        setFavProduct(status);
    }

    return (
        <div>
            <Nav handleCateProduct={handleCateProduct} handleFavProduct={handleFavProduct} />
            <Banner />
            <Body cateProduct={cateProduct} favProduct={favProduct} />
            <Footer />
        </div>
    )
}

export default Homepage
