import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../css/items/ItemTemplate.css'
import { FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ItemTemplate = ({ productItem }) => {
    const [itemData, setItemData] = useState([]);
    const [bgImage, setBgImage] = useState('');
    const [isFav, setIsFav] = useState(false);

    // Gio han ten
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    // Xu ly favorite product
    const handleFav = async (ID) => {
        setIsFav(!isFav);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        try {
            const productResponse = await axios.put(`${backendUrl}/product/favProduct`, { ID }, { withCredentials: true });
            // console.log(productResponse.data);
        }
        catch (error) {
            console.log('Cannot add to favorite product');
            throw error;
        }
    }

    const handleDelFav = async (ID) => {
        setIsFav(!isFav);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        try {
            const productResponse = await axios.put(`${backendUrl}/product/resetFavProduct`, { ID }, { withCredentials: true });
            // console.log(productResponse.data);
        }
        catch (error) {
            console.log('Cannot add to favorite product');
            throw error;
        }
    }

    // Xu ly anh loi
    useEffect(() => {
        setItemData(productItem);

        const img = new Image();
        img.src = itemData.ImageUrl;
        img.onload = () => setBgImage(itemData.ImageUrl);
        img.onerror = () => setBgImage('/images/loading-image.gif');
        // console.log(itemData);
    }, [productItem]);

    // Xu ly fav icon
    useEffect(() => {
        if (productItem.IsFavorite) {
            setIsFav(true);
        }
        else {
            setIsFav(false);
        }
    }, [productItem]);

    return (
        <div className='item' style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}>
            <div className='item-img' style={{
                backgroundImage: `url(${bgImage})`
            }}>
                {/* Icon trái tim */}
                <div className='hover'>
                    {isFav ? <IoMdHeart onClick={() => handleDelFav(productItem.ProductID)} /> : <IoIosHeartEmpty onClick={() => handleFav(productItem.ProductID)} />}
                </div>
            </div>

            {/* Nội dung dưới hình ảnh */}
            <div style={{ color: 'black', padding: '10px' }}>
                <p className='name-hover'>{truncateText(productItem.ProductName, 16)}</p>
                <p>4 <FaStar /></p>
                <p>${productItem.Price}</p>
            </div>
        </div >

    )
}

export default ItemTemplate
