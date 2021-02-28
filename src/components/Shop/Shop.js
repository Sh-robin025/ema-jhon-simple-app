import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    // const cutData = fakeData.slice(0, 10)
    // eslint-disable-next-line
    const [data, setData] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const addCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-area">
            <div className="product-area">
                {
                    data.map(item =><Products 
                        data={item} 
                        addCart={addCart}/>
                    )
                }
            </div>
            <div className="order-summery">
                <h2>Order Summary</h2>
                <h3>Item selected : {cart.length}</h3>
                <Cart data ={cart}/>
            </div>
        </div>
    );
};

export default Shop;