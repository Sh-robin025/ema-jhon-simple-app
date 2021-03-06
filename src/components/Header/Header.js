import React from 'react';
import logo from '../Header/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="/shop"><img src={logo} alt=""/></a>
            <div className="buttons">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;