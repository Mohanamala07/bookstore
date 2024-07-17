import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Card.css';
import { FaStar, FaRegStar, FaRegHeart } from 'react-icons/fa';

const Card = ({ product }) => {
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
    <Link to={`/product/${product.id}`} className="card-link"> {/* Use Link to wrap your card */}
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
    </Link>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
