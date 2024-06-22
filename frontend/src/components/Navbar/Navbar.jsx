import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Dropdown ,Card} from '../../widgets';

import { navItems } from '../../constants/path.js';
import { product } from '../../constants/contentofcard.js';
import login from '../../assets/login.webp';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="responsive">Get Rs50 off</div>
      <div className="top-bar">
        <div className="promo">Get Rs50 extra off, Use Code : APP50 GET APP</div>
        <div className="top-bar-links">
          <a href="#">Lock The Box</a>
          <a href="#">Wholesale</a>
          <a href="tel:9050111218">Call: 90501 11218</a>
          <a href="#">Track Order</a>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="logo">
          <h1>BookBox</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search by ISBN, Title, Author" />
          <button>🔍</button>
        </div>
        <div className="login">
          <img src={login} alt="Login" />
          <button>Login</button>
        </div>
      </nav>
      
      <div className="navbar_responsive">
        <div className="responsive_logo">
          <h1>BookBox</h1>
        </div>
        <div className="responsive_search-bar">
          <input type="text" placeholder="Search by ISBN, Title, Author" />
          <button>🔍</button>
        </div>
        <div className="login">
          <img src={login} alt="Login" />
          <button>Login</button>
        </div>
      </div>
      
      <div className="menubar">
        <ul className="menu-bar">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.type === "dropdown" ? (
                <Dropdown
                  title={item.title}
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
        <Link to="/store">
          <span className="icon">🏬</span>
          <span>Store</span>
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