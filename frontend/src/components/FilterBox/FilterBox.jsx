import React, { useState } from 'react';
import './FilterBox.css';

const FilterBox = () => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isBindingOpen, setIsBindingOpen] = useState(false);
  const [isConditionOpen, setIsConditionOpen] = useState(false);
  const [isFilterBoxVisible, setIsFilterBoxVisible] = useState(false);

  const toggleGenre = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const toggleBinding = () => {
    setIsBindingOpen(!isBindingOpen);
  };

  const toggleCondition = () => {
    setIsConditionOpen(!isConditionOpen);
  };

  const toggleFilterBox = () => {
    setIsFilterBoxVisible(!isFilterBoxVisible);
  };

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={toggleFilterBox}>
          {isFilterBoxVisible ? (
            <span>
              Hide filters <i className="arrow open">▶</i>
            </span>
          ) : (
            <span>
              Show filters <i className="arrow">▶</i>
            </span>
          )}
        </button>
        {/* <button>
          Best selling <i className="arrow">▶</i>
        </button> */}
      </div>
      {isFilterBoxVisible && (
        <div className="filter-box">
          <div className="filter-section">
            <div className="filter-header" onClick={toggleGenre}>
              <span>Genre</span>
              <span className={`arrow ${isGenreOpen ? 'open' : ''}`}>▶</span>
            </div>
            {isGenreOpen && (
              <div className="filter-content">
                <label>
                  <input type="checkbox" /> Adventure
                </label>
                <label>
                  <input type="checkbox" /> Amar Chitra Katha
                </label>
                <label>
                  <input type="checkbox" /> American Comics
                </label>
                <label>
                  <input type="checkbox" /> Art, Painting & Music CT
                </label>
                <label>
                  <input type="checkbox" /> BC fiction
                </label>
                <label>
                  <input type="checkbox" /> BC fantasy
                </label>
                <label>
                  <input type="checkbox" /> BC historical
                </label>
                <label>
                  <input type="checkbox" /> BC mystery thriller
                </label>
                <label>
                  <input type="checkbox" /> BC non fiction
                </label>
                <div className="show-more">SHOW MORE</div>
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className="filter-header" onClick={togglePrice}>
              <span>Price</span>
              <span className={`arrow ${isPriceOpen ? 'open' : ''}`}>▶</span>
            </div>
            {isPriceOpen && (
              <div className="filter-content">
                <label>
                  <input type="checkbox" /> Under $10
                </label>
                <label>
                  <input type="checkbox" /> $10 - $20
                </label>
                <label>
                  <input type="checkbox" /> $20 - $30
                </label>
                <label>
                  <input type="checkbox" /> $30 - $40
                </label>
                <label>
                  <input type="checkbox" /> $40 and above
                </label>
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className="filter-header" onClick={toggleBinding}>
              <span>Binding</span>
              <span className={`arrow ${isBindingOpen ? 'open' : ''}`}>▶</span>
            </div>
            {isBindingOpen && (
              <div className="filter-content">
                <label>
                  <input type="checkbox" /> Hardcover
                </label>
                <label>
                  <input type="checkbox" /> Paperback
                </label>
                <label>
                  <input type="checkbox" /> Spiral Bound
                </label>
                <label>
                  <input type="checkbox" /> Loose Leaf
                </label>
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className="filter-header" onClick={toggleCondition}>
              <span>Condition</span>
              <span className={`arrow ${isConditionOpen ? 'open' : ''}`}>▶</span>
            </div>
            {isConditionOpen && (
              <div className="filter-content">
                <label>
                  <input type="checkbox" /> New
                </label>
                <label>
                  <input type="checkbox" /> Like New
                </label>
                <label>
                  <input type="checkbox" /> Very Good
                </label>
                <label>
                  <input type="checkbox" /> Good
                </label>
                <label>
                  <input type="checkbox" /> Acceptable
                </label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBox;
