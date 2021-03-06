import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ShowProduct.css';

const ShowProduct = (props) => {
    const { name, quantity, price, key, img } = props.product;
    // const {remove} = props.handleRemove

    return (
        <div className="reviewShowPd">
            <>
                <h3 style={{ color: '#ff9800' }}>{name}</h3>
                <h4>Price: $ {price}</h4>
                <h6>Quantity: {quantity}</h6>
                <button onClick={() => props.handleRemove(key)}><FontAwesomeIcon icon={faShoppingCart} /> Remove From Cart</button>
            </>
            <img src={img} style={{ width: '90px', marginLeft: '300px' }} alt="" />
        </div>
    );
};

export default ShowProduct;