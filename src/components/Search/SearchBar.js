import React, { PropTypes } from 'react'

const SearchBar = ({onSearchChange}) => (
  <div className="container">
    <div className="row">
      <div id="sbox-search-form">
        <input
          id="sb_search"
          type="text"
          placeholder="Search here"
          onChange={onSearchChange}/>
      </div>
    </div>
  </div>
)

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchBar
