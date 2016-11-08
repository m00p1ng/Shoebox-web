import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SearchApp = ({onSearchChange, text}) => (
  <div>
    <h1>Search</h1>
    <SearchBar
      onSearchChange={onSearchChange}/>
    <SearchResult
      text={text}/>
  </div>
)

export default SearchApp
