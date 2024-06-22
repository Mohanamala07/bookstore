import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 2500; // Time in milliseconds

    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image();
                img.src = image.src;
            });
        };
        preloadImages();
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images.length, intervalTime]);

    const showPrevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const showNextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <a
                    key={index}
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <img
                        src={image.src}
                        alt={`Slide ${index}`}
                        className={index === currentIndex ? 'active' : ''}
                        style={{ cursor: 'pointer' }} // Add pointer cursor
                    />
                </a>
            ))}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
