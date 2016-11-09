import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SearchApp = ({onSearchChange, result, hasError}) => (
  <div>
    <h1>Search</h1>
    <SearchBar
      onSearchChange={onSearchChange}/>
    <SearchResult
      result={result}
      hasError={hasError}/>
  </div>
)

export default SearchApp
