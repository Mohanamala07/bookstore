import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../widgets';
import { navItems } from '../../constants/path.js';
import account from '../../assets/account.webp';
import cart from '../../assets/shopping-bag.webp'; 
import wishlist from '../../assets/wishlist.webp';
import freedelivery from '../../assets/freedelivery.webp';
import originalbooks from '../../assets/originalbooks.webp';
import { Sidebar } from '../../components/'; // Ensure correct import path
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [expandedSearch, setExpandedSearch] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
    if (window.innerWidth <= 832) {
      setExpandedSearch(!expandedSearch);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 832) {
        setExpandedSearch(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <Sidebar />
      <div className="top-bar">
        <div className="top-bar-links">
          <a href="#">
            <img src={freedelivery} alt="Free Delivery" /> Free Delivery
          </a>
          <a href="#">
            <img src={originalbooks} alt="Original Books" /> Original Books only
          </a>
          <a href="#">
            <img src={freedelivery} alt="Get Rs50 extra off" /> Get Rs50 extra off
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <h1>
            <span className="red-letter">B</span>ookBox
          </h1>
        </div>
        <div className={`search-bar ${expandedSearch ? 'expanded' : ''}`}>
          <input type="text" placeholder="Search by ISBN, Title, Author" id="search-input" />
          <div className="search_img" onClick={toggleSearchBar}>
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
        <div className="account-cart">
          <div className="account">
            <img src={account} alt="account" />
          </div>
          <div className="cart">
            <img src={cart} alt="Cart Icon" />
          </div>
          <div className="wishlist">
            <img src={wishlist} alt="wishlist" />
          </div>
        </div>
      </nav>

      <div className="navbar_responsive">
        <div className="logo">
          <h1>
            <span className="red-letter">B</span>ookBox
          </h1>
        </div>
        <label htmlFor="check" id="btn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="wishlist">
          <img src={wishlist} alt="wishlist" />
        </div>
      </div>
      <div className={`responsive_search-bar ${expandedSearch ? 'expanded' : ''}`}>
        <input type="text" placeholder="Search by ISBN, Title, Author" />
        <div className="search_img">
          <button><i className="fas fa-search"></i></button>
        </div>
      </div>

      <div className="menubar">
        <ul className="menu-bar">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.title === "Shop By Category" ||
              item.title === "Shop By Store" ||
              item.title === "Text Books" ||
              item.title === "Harry Potter" ? (
                <Dropdown
                  type={item.type}
                  title={item.title}
                  basepath={item.basepath}
                  links={item.links}
                />
              ) : (
                <Link to={item.basepath} className="non-dropdown-item">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="bottom-nav">
        <Link to="/home">
          <span className="icon">🏠</span>
          <span>Home</span>
        </Link>
        <Link to="/categories">
          <span className="icon">📚</span>
          <span>Categories</span>
        </Link>
        <Link to="/cart">
          <span className="icon">🛒</span>
          <span>Cart</span>
        </Link>
        <Link to="/account">
          <img src={account} alt="Account" />
          <span>My Account</span>
        </Link>
        <Link to="/more">
          <span className="icon">⋮</span>
          <span>More</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
