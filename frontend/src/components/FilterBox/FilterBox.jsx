import React, { useState } from 'react';
import { Range } from 'react-range';
import './FilterBox.css';

// Sample genres and authors for the filters
const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Biography'];
const authors = ['J.K. Rowling', 'George R.R. Martin', 'Isaac Asimov', 'Jane Austen'];
const lang =['Tamil','English','Hindi'];

const FilterBox = ({ onFilterChange }) => {
    // State to hold the current filter selections
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedLang, setSelectedLang]= useState('');
    const [priceRange, setPriceRange] = useState([0, 100]); // Default price range
    
    const [publicationDate, setPublicationDate] = useState('');

    // Handle change in any filter and pass it to parent component
    const handleFilterChange = () => {
        onFilterChange({
            genre: selectedGenre,
            author: selectedAuthor,
            lang: selectedLang,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            
            publicationDate
        });
    };

    const handlePriceChange = (values) => {
        setPriceRange(values);
        handleFilterChange();
    };

    return (
        <div className="filter-box">
            <h2>Filter Books</h2>
            {/* Genre Filter */}
            <div className="filter-section">
                <label htmlFor="genre">Genre</label>
                <select
                    id="genre"
                    value={selectedGenre}
                    onChange={(e) => {
                        setSelectedGenre(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Author Filter */}
            <div className="filter-section">
                <label htmlFor="lang">Language</label>
                <select
                    id="lang"
                    value={selectedLang}
                    onChange={(e) => {
                        setSelectedLang(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Language</option>
                    {lang.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <label htmlFor="author">Author</label>
                <select
                    id="author"
                    value={selectedAuthor}
                    onChange={(e) => {
                        setSelectedAuthor(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">All Authors</option>
                    {authors.map((author) => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>


            {/* Price Range Slider */}
            <div className="filter-section">
                <label>Price Range (Rs)</label>
                <Range
                    step={1}
                    min={0}
                    max={100}
                    values={priceRange}
                    onChange={(values) => handlePriceChange(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '20px',
                                width: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'grey'
                            }}
                        />
                    )}
                />
                <div className="price-range-values">
                    <span>Rs {priceRange[0]}</span> - <span>Rs {priceRange[1]}</span>
                </div>
            </div>



            {/* Publication Date Filter */}
            <div className="filter-section">
                <label htmlFor="publication-date">Publication Date</label>
                <input
                    type="date"
                    id="publication-date"
                    value={publicationDate}
                    onChange={(e) => {
                        setPublicationDate(e.target.value);
                        handleFilterChange();
                    }}
                />
            </div>
        </div>
    );
};

export default FilterBox;
