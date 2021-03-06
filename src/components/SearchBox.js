import React from 'react';

const SearchBox = ({ handleChange }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search cats"
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;