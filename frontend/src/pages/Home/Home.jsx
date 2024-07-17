import React from 'react';
import { Carousel, Card } from '../../widgets';
import { product1 } from '../../constants/contentofcard'; // Assuming product1 is your array of products
import caurosel5 from '../../assets/caurosel5.jpg';
import caurosel6 from '../../assets/caurosel6.jpg';
import caurosel7 from '../../assets/caurosel7.webp';

function Home() {
  const imageSources = [
    { src: caurosel5, url: '/combo' },
    { src: caurosel6, url: '/comic' },
    { src: caurosel7, url: '/deal' },
  ];

  return (
    <div className="home">
      <div className="App">
        <Carousel images={imageSources} />
      </div>
      <div className="App1">
        <div className="card_head">Fiction</div>
        <div className="cards-container">
          {product1.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
