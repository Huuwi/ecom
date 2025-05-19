import React, { useState, useEffect } from 'react'
import '../../css/items/item.css'
import ItemTemplate from './ItemTemplate'

const Item = ({ products, oneProductData, hanleClickProduct }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(products || []);
        // console.log(data);
    }, [products]);

    return (
        <div className="container">
            <div className="row" style={{ gap: '15px' }}>
                {data?.map((item, index) => {
                    return <div className="col-6 col-lg-2 text-white p-1 mb-3 item" key={index} >
                        <ItemTemplate productItem={item} oneProductData={oneProductData} hanleClickProduct={hanleClickProduct} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Item
