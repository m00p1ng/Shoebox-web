import React from 'react'

const SearchBar = ({onSearchChange}) => (
  <div className="row">
    <input
      id="sb_search"
      type="text"
      className="form-style-6"
      onChange={onSearchChange}/>
  </div>
)

export default SearchBar
