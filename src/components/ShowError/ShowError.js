import React from 'react';

const ShowError = () => {
    const style ={
        color:'red',
        textAlign: 'center',
        margin: '100px',
        fontSize: '30px'
    }
    return (
        <div style={style}>
            <h2>Sorry,Not Found.</h2>
            <h1>404</h1>
        </div>
    );
};

export default ShowError;