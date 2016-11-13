import React, { PropTypes } from 'react'

const SearchBar = ({onSearchChange}) => (
  <div className="row">
    <div className="form-style-6" id="sbox-search-form">
    <input
      id="sb_search"
      type="text"
      className="sbox-search-form-input"
      onChange={onSearchChange}/>
    </div>
  </div>
)

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchBar
