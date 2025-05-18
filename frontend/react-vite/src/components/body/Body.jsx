import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios';
import '../../css/body/body.css'
import Item from '../items/Item'

const Body = ({ cateProduct }) => {
    const [allData, setAllData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [more, setMore] = useState(24);
    const [isOut, setIsOut] = useState(false);
    const [noData, setNoData] = useState(false);

    const handleGetMoreProducts = () => {
        setMore(prev => {
            const newMore = prev + 12;
            const newData = allData.slice(0, newMore);
            setProductsData(newData);

            if (newMore >= allData.length) {
                setIsOut(true);
            }

            return newMore;
        });
    }

    useEffect(() => {
        const getProducts = async () => {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            try {
                const productResponse = await axios.get(`${backendUrl}/product/products`, { withCredentials: true });
                // console.log(productResponse.data);
                setAllData(productResponse.data);
                setProductsData(productResponse.data.slice(0, more));

                if (productResponse.data.length == 0) {
                    setNoData(true);
                }
                else {
                    setNoData(false);
                }
            }
            catch (error) {
                console.log('Cannot get products infor');
                throw error;
            }
        }

        getProducts();
    }, []);

    useEffect(() => {
        const newData = allData.filter(product => product.CategoryID == cateProduct);
        setProductsData(newData);
        // console.log(newData);
        if (newData.length == 0) {
            setNoData(true);
        }
        else {
            setNoData(false);
        }
    }, [cateProduct]);

    return (
        <>
            <div className='container-fluid' style={{
                // background: 'black',
                backgroundImage: 'url(/images/no-data.gif)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '50vh',
                width: '90vw',
                display: noData ? 'block' : 'none'
            }}></div>
            <Item products={productsData} />
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '15px'
            }}>
                <button className='more-btn' onClick={handleGetMoreProducts}
                    style={{
                        display: isOut ? 'none' : 'block',
                        marginTop: '30px'
                    }}
                >View More</button>
            </div>
        </>
    )
}

export default Body
