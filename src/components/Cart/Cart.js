import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.data;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        console.log(element);
        total = total + element.price;
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
        <div>
            <table>
                <tr>Product price : $ {setPrecision(total)}</tr>
                <tr>Shipping Cost : $ {shipping}</tr>
                <tr>Tax & Vat : $ {setPrecision(tax)}</tr>
            </table>
            <h5>Total : $ {setPrecision(inTotal)}</h5>
        </div>
    );
};

export default Cart;