import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ShowProduct from './ShowProduct';
import image from '../../images/giphy.gif'

const Review = () => {
    const [order, setOrder] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    const handleRemove = productKey => {
        const newOrder = order.filter(item => item.key !== productKey)
        setOrder(newOrder);
        removeFromDatabaseCart(productKey);
    }
    const orderPlaced = () => {
        setOrder([]);
        setOrderPlace(true);
        processOrder();
    }

    useEffect(() => {
        const savedOrder = getDatabaseCart();
        const key = Object.keys(savedOrder)
        const cartProduct = key.map(item => {
            const product = fakeData.find(pd => pd.key === item);
            product.quantity = savedOrder[item];
            return product;
        })
        setOrder(cartProduct)
    }, [])

    let greeting;
    if (orderPlace) {
        greeting = <img src={image} alt=""/>;
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '60%', marginLeft: '10%', borderRight: '1px solid lightslategray' }}>
                {
                    order.map(item => <ShowProduct key={item.key} handleRemove={handleRemove} product={item} />)
                }
                {greeting}
            </div>
            <div style={{ width: '30%', margin: '20px 0 0 100px' }}>
                <h2>Item : {order.length}</h2>
                <Cart data={order}>
                    <button onClick={orderPlaced}> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;