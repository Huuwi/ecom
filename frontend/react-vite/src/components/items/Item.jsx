import React from 'react'
import '../../css/items/item.css'
import ItemTemplate from './ItemTemplate'

const Item = () => {
    return (
        <div className="container">
            <div className="row" style={{ gap: '15px' }}>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
                <div className="col-6 col-lg-2 text-white p-1 mb-3 item">
                    <ItemTemplate />
                </div>
            </div>
        </div>
    )
}

export default Item
