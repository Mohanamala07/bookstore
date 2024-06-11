import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { navItems } from '../../constants/path.js';
import { Dropdown } from '../../widgets';
import Logo from '../../assets/books.png';

const Navbar = () => {
    const togglemenu = () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open');
    };

    const [screen_width, setScreen_width] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreen_width(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='navigation'>
            <nav className="navbar navbar-expand-xl navbar-dark" aria-label="Main navigation">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="navbar-brand d-flex align-items-center">
                        <img src={Logo} alt="Logo" className="navbar-logo" />
                        <span className="navbar-text">heloo</span>
                    </div>
                    <div className="navItems">
                        <ul className="navbar-nav navbar-links d-flex align-items-center">
                            {navItems.map((item) => (
                                <Dropdown 
                                    func={togglemenu} 
                                    key={item.id} 
                                    type={item.type} 
                                    title={item.title} 
                                    base={item.basepath} 
                                    links={item.links} 
                                />
                            ))}
                            {/* Conditionally render the search box */}
                            {/* {navItems.find(item => item.type === "2") && (
                               <form action="/search" method="GET" className="navbar-form">
                               <input type="text" name="query" placeholder="Search..." className="search-input" />
                               <button type="submit" className="search-button">Search</button>
                           </form>
                           
                            )} */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
