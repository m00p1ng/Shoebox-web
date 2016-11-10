import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SearchApp = ({
  onSearchChange,
  result,
  searchText,
  isLoading,
  hasError
}) => (
  <div>
    <h1>Search</h1>
    <SearchBar
      onSearchChange={onSearchChange}/>
    <SearchResult
      result={result}
      isLoading={isLoading}
      searchText={searchText}
      hasError={hasError}/>
  </div>
)

export default SearchApp
