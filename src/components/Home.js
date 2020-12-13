import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="cart-wrapper">
                <img src="https://i.pinimg.com/originals/65/17/5a/65175a608b1e5a740bd7ebcbb61bb59e.jpg" />
            </div>
            <div className="product-wrapper">
                <div className="product-image">
                    <img src="https://images.hindustantimes.com/tech/img/2020/09/18/960x540/image_(93)_1600396450412_1600396457994_1600396636550.jpg" />
                </div>
                <div className="product-details-wrapper">
                    <span className="product-name">
                        Samsung Galaxy M51
                    </span>
                    <span className="product-price">
                        Price: ₹22499
                    </span>
                </div>
                <div className="addtocart-button">
                    <button type="button">Add+</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
