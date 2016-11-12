import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import HeaderBarApp from '../App/HeaderBarApp'

const SearchApp = ({
  onSearchChange,
  result,
  searchText,
  isLoading,
  hasError
}) => (
  <div>
    <HeaderBarApp
      title="Search"
      link="search"
    />
    <div className="container">
    <SearchBar
      onSearchChange={onSearchChange}/>
    <SearchResult
      result={result}
      isLoading={isLoading}
      searchText={searchText}
      hasError={hasError}/>
    </div>
  </div>
)

export default SearchApp
