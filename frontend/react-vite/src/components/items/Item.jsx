import React from 'react'
import '../../css/items/item.css'

const Item = () => {
    return (
        <div className="container">
            <div className="row" style={{ gap: '15px' }}>
                <div className="col-6 col-lg-2 bg-primary text-white p-3 mb-3 item">Ô 1</div>
                <div className="col-6 col-lg-2 bg-success text-white p-3 mb-3 item">Ô 2</div>
                <div className="col-6 col-lg-2 bg-danger text-white p-3 mb-3 item">Ô 3</div>
                <div className="col-6 col-lg-2 bg-warning text-white p-3 mb-3 item">Ô 4</div>
                <div className="col-6 col-lg-2 bg-info text-white p-3 mb-3 item">Ô 5</div>
                <div className="col-6 col-lg-2 bg-secondary text-white p-3 mb-3 item">Ô 6</div>
            </div>
        </div>
    )
}

export default Item
