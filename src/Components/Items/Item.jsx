
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {

    const handleProductClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <article className="item">

            {/* PRODUCT IMAGE */}
            <Link
                to={`/product/${id}`}
                className="item-image-link"
                onClick={handleProductClick}
            >
                <div className="item-image-container">
                    <img
                        src={image}
                        alt={name}
                        className="item-image"
                        loading="lazy"
                    />

                    <span className="item-view-label">
                        VIEW PRODUCT
                    </span>
                </div>
            </Link>

            {/* PRODUCT INFORMATION */}
            <div className="item-details">

                <Link
                    to={`/product/${id}`}
                    className="item-name"
                    onClick={handleProductClick}
                >
                    {name}
                </Link>

                {/* PRICES */}
                <div className="item-prices">

                    <span className="item-price-new">
                        ${new_price}
                    </span>

                    <span className="item-price-old">
                        ${old_price}
                    </span>

                </div>

            </div>

        </article>
    );
};

export default Item;
