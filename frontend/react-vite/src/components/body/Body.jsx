import React from 'react'
import '../../css/body/body.css'
import Item from '../items/Item'

const Body = () => {
    return (
        <>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '15px'
            }}>
                <button className='more-btn'>View More</button>
            </div>
        </>
    )
}

export default Body
