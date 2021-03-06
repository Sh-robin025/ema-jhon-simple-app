
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.data;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price * element.quantity;
        // debugger;
    }

    let shipping = 0;
    if (total > 50) {
        shipping = 0;
    } else if (total > 30) {
        shipping = 6.66;
    } else if (total > 0) {
        shipping = 11.39;
    }

    const tax = total / 7;
    const inTotal = total + shipping + tax;

    const setPrecision = num => {
        const precision = num.toFixed(2)
        return Number(precision);
    }

    return (
        <div className="cart">
            <div>
                <p> <span>Product price : </span><span style={{ marginLeft: '30px' }}>$ {setPrecision(total)}</span></p>
                <p>Shipping Cost :<span style={{ marginLeft: '30px' }}>$ {shipping}</span> </p>
                <p>Tax & Vat : <span style={{ marginLeft: '60px', }}>$ {setPrecision(tax)}</span></p>
            </div>
            <h5>Total : <span style={{ marginLeft: '95px' }}>$ {setPrecision(inTotal)}</span></h5>
            {props.children}
        </div>
    );
};

export default Cart;