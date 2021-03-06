import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Products = (props) => {
    // console.log(props.data);
    const { img, name, seller, price, stock, key } = props.data;
    // console.log(key);


    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="details">
                <h3>* <Link to={"/product/" + key}>{name}</Link></h3>
                <h6>By : {seller}</h6>
                <h4>$ {price}</h4>
                <p>Only {stock} left in stock - order soon.</p>
                <button onClick={() => props.addCart(props.data)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Products;