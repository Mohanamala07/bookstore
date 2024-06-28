import React from 'react';
import './Footer.css'; // Importing the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing Font Awesome CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-description">
                    <h2>BookBox</h2>
                    <p>Embark on a literary journey with book, the online book wonderland nestled in Jaipur since 2018. We take pride in being sustainable and eco-friendly - from new releases to treasured pre-loved books. And wait, there's more! Dive into the sea of bookish merchandise that'll make any bookworm's heart flutter. Join Kitabay and let sustainable reading ignite your imagination!</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Brand Story</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Shop Now</h4>
                        <ul>
                            <li><a href="#books">Books</a></li>
                            <li><a href="#mystery-box"> Box</a></li>
                            <li><a href="#merchandise">Merchandise</a></li>
                            <li><a href="#gifting">Gifting</a></li>
                            <li><a href="#bulk">Bulk</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <div className="footer_policies">
                            <h4>Policies</h4>
                        </div>
                        <ul>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                            <li><a href="#shipping-returns">Shipping & Returns</a></li>
                            <li><a href="#payments-refunds">Payments & Refunds</a></li>
                            <li><a href="#terms-conditions">T&C</a></li>
                            <li><a href="#track-order">Track Your Order</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-social-media">
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a></li>
                </ul>
            </div>
            <div className="Footer_developer_name">
                <div className="footer_developer">
                    <h1>Developed and maintained by</h1>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/kanishka-m-5655472a0" target="_blank" rel="noopener noreferrer">Kanishka</a></li>
                        <li><a href="https://www.linkedin.com/in/mohana-mala-025a88245/" target="_blank" rel="noopener noreferrer">Mohana Mala</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
