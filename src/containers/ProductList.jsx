import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
    return (
        <section className="main-container">
            <div className="ProductList">
                { Array(10).fill(null).map((item, index) => <ProductItem key={index} />) }
            </div>
        </section>
    );
}

export default ProductList;
