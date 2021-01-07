import React, { useState, useEffect } from 'react';
import { getProduct } from './helper/Coreapicalls';
import Base from './Base';
import "../styles.css";


export default function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const loadallproducts = () => {
        getProduct()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                }
                else {
                    setProducts(data);
                }
            });
    };

    useEffect(() => {
        loadallproducts();
    }, []);
    return (
        <Base title="Home Page" description="Welcome to the Store">
            <h1>This is the Home</h1>
            <div className="row">
                {products.map((product, index) => {
                    return(
                        <div key={index}>
                            <h1>{product.name}</h1>
                        </div>
                    );
                })}
            </div>
        </Base>
    );
}