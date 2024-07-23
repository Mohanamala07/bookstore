import React from 'react';
import { useParams } from 'react-router-dom';
import { product1 } from '../../constants/ProductDetailData.js';
import { FaStar, FaHeart } from 'react-icons/fa';
import './ProductDetailFile.css';

const ProductDetailFile = () => {
  const { productId } = useParams();
  const product = product1.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p className="product-author">by {product.author}</p> {/* Author name */}
        <p className="product-rate">Rs. {product.rate} <span className="old-price">Rs. {product.oldPrice}</span><span className="product-discount"> {product.discount}</span></p>
        <div className="product-detail-rating"><strong>Ratings: </strong>  
          {Array(product.rating).fill().map((_, i) => (
            <FaStar key={i} className="star-filled-star" />
          ))}
        </div>
        <p className="product-in-stock">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        <p className="product-binding"><strong>Binding:</strong> {product.binding}</p>
        <p className="product-condition"><strong>Condition:</strong> {product.condition}</p>
        <div className="product-actions">
          <button className="cart-btn">Add to Cart</button>
          <button className="wishlist-btn">Wishlist</button>
        </div>
        <div className="button-buy">
        <button className="buy-now-btn">Buy Now</button>

</div>
        <p className="product-delivery">{product.delivery}</p>
        <p className="product-quality"><strong>Quality Check:</strong> {product.qualityCheck}</p>
        <p className="product-bookmark"><strong>Bookmark:</strong> {product.bookmark}</p>
        
        <p className="product-description">
          <strong>Description:</strong> {product.description}
        </p>
       
      </div>
    </div>
  );
};

export default ProductDetailFile;
