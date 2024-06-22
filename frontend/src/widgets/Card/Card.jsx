// src/widgets/Card/Card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from 'react-icons/fa'; // Import FontAwesome icons

const Card = ({ product }) => {
  // Render 5 stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <FaStar key={i} className="star filled-star" /> : <FaRegStar key={i} className="star empty-star" />
      );
    }
    return stars;
  };

  return (
    <div className="shopping-card">
    
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="card-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          {renderStars(product.rating)}
        </div>
        <p className="product-price">Rs. {product.price.toFixed(2)}</p>
        <div className="heart-icon">
        <FaRegHeart />
      </div>
        <button className="add-to-cart-btn">Add to Cart</button>
       
      </div>
    </div>
  );
};

// PropTypes to ensure correct data types
Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
