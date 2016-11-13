import React, { PropTypes } from 'react'
import SearchItem from './SearchItem'

const render_list = (list) => (
  list.map(item => {
    return (
      <SearchItem
        key={item.slug}
        product={item}/>
    )
  })
)

const renderResult = (result, hasError, isLoading ,searchText) => {
  // if(isLoading) return(<h1>Loading...</h1>)
  if (hasError) return (<h3>Oh sorry, <strong>{searchText}</strong> Not found</h3>)
  if (result.length > 0) return (
    <div>
    <h3>Found {result.length} items</h3>
    {render_list(result)}
    </div>
  )
  return (<h3>What are you looking for..</h3>)
}

const SearchResult = ({
  result,
  hasError,
  searchText,
  isLoading
}) => (
  <div>
    {renderResult(result, hasError, isLoading, searchText)}
  </div>
)

SearchResult.propTypes = {
  result: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
}

export default SearchResult
