import React from 'react'
import '../../css/items/ItemTemplate.css'
import { FaStar } from "react-icons/fa6";

const ItemTemplate = () => {
    return (
        <>
            {/* <img src="/images/fashion.jpg" class="img-fluid item-img" alt="Responsive image" /> */}
            <div className='item-img'></div>
            <div style={{ color: 'black' }}>
                <p>U I I A Cat</p>

                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>4 <FaStar /></p>

                <p className='price'>$9999.99</p>
            </div>
        </>
    )
}

export default ItemTemplate
