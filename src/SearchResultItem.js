import React from 'react';

function SearchResultItem(props) {
  return (
    <div className="search-result">
      <div className="left">
        <img src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" alt="super pic" />
      </div>
      <div className="right">
        <h1>Batman Beyond</h1>
        <div className="stats">
          <div>strength: 26</div>
          <div>speed: 60</div>
          <div>power: 100</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;