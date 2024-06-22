import React from 'react';
import { Carousel } from '../../widgets';

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
        <div className="App">
            <Carousel images={imageSources} />
        </div>
    );
}

export default Home;
