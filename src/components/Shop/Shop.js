import React, { useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    // const cutData = fakeData.slice(0, 10)
    // eslint-disable-next-line
    const [data, setData] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedOrder = getDatabaseCart();
        const key = Object.keys(savedOrder)
        const cartProduct = key.map(item => {
            const product = fakeData.find(pd => pd.key === item);
            product.quantity = savedOrder[item];
            return product;
        })
        setCart(cartProduct);
    }, [])

    const addCart = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(item => item.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(item => item.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="shop-area">
            <div className="product-area">
                {
                    data.map(item => <Products
                        key={item.key}
                        data={item}
                        addCart={addCart} />
                    )
                }
            </div>
            <div className="order-summery">
                <h2>Order Summary</h2>
                <h3>Item selected : {cart.length}</h3>
                <Cart data={cart}>
                    <Link to="/review">
                        <button><FontAwesomeIcon icon={faShoppingCart} /> Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;