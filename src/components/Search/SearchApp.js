import React, { PropTypes } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { HeaderBarApp } from '../App/HeaderBarApp'

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
      link="search" />
    <SearchBar
      onSearchChange={onSearchChange}/>
    <SearchResult
      result={result}
      isLoading={isLoading}
      searchText={searchText}
      hasError={hasError}/>
  </div>
)

SearchApp.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
}

export default SearchApp
