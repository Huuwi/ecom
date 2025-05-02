import React from 'react'
import '../../css/items/ItemTemplate.css'
import { FaStar } from "react-icons/fa6";

const ItemTemplate = () => {
    return (
        <>
            {/* <img src="/images/fashion.jpg" class="img-fluid item-img" alt="Responsive image" /> */}
            <div className='item-img'>

            </div>
            <div style={{ color: 'black' }}>
                <p>Bree Camo Stretch Cargo Jean - Olive/combo</p>

                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>4 <FaStar /></p>

                <p>$14.00</p>
            </div>
        </>
    )
}

export default ItemTemplate
