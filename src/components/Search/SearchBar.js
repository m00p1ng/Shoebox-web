import React from 'react'

const SearchBar = ({onSearchChange}) => (
  <div className="row">
    <div className="input-field col s6 offset-s3">
      <input id="sb_search" type="text" className="validate" onChange={onSearchChange}/>
      <label htmlFor="sb_search">Search</label>
    </div>
  </div>
)

export default SearchBar
