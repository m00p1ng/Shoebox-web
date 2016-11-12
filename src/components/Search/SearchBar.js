import React from 'react'

const SearchBar = ({onSearchChange}) => (
  <div className="row">
    <div className="form-style-6">
    <input
      id="sb_search"
      type="text"
      onChange={onSearchChange}/>
    </div>
  </div>
)

export default SearchBar
