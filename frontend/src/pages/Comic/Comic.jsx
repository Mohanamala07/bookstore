import React, { useState } from 'react';
import { FilterBox } from '../../components';
import { Card } from '../../widgets';
import { product1, product2 } from '../../constants/contentofcard.js';
import './Comic.css';
//comic
const Comic = () => {
    const [filters, setFilters] = useState({});

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        
        console.log(newFilters);
    };

    return (
        <div className="App">
            <div className="comics_head">Comics</div>
            <div className="comics-content">
                <FilterBox onFilterChange={handleFilterChange} />
                
                <div className="comics_card">
                    <div className="cards-container">
                        {product1.map((product, index) => (
                            <Card key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Comic;
