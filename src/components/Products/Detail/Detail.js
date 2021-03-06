import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../../fakeData';

const Detail = () => {
    const { key } = useParams();
    const product = fakeData.find(item => item.key === key);
    const { img, name, price, seller, stock, features } = product;
    const style = {
        width : '60%',
        margin: 'auto',
        padding:'20px',
        borderRadius: '10px',
        boxShadow: '5px 5px 10px'
    }

    return (
        <div style={style}>
            <h1>Product Details :-</h1>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price : {price}</h4>
            <h6>By : {seller}</h6>
            <h6>Only {stock} left in stock - order soon.</h6>
            <h4>Features:-</h4>
            <ul>{
                features.map(item =>
                    <div style={{display:"flex"}}>
                        <h6>{item.description}: </h6><h6>- {item.value}</h6>
                    </div>
                )
            }</ul>
        </div >
    );
};

export default Detail;