import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/OrderItem.scss';

import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (productToRemove) => {
        removeFromCart(productToRemove);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt="bike" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={icon_close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;
