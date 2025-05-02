import React from 'react'
import '../../css/banner/banner.css'
import Search from '../search-bar/Search'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container-fluid p-0">
                <img
                    src='/images/banner.jpg'
                    alt="Banner"
                    className="img-fluid w-100"
                    style={{ height: "100%" }}
                />
                <div className="banner-text">SHOP</div>
                <Search />
            </div>
        </div>
    )
}

export default Banner
