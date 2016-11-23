import React, { PropTypes } from 'react'
import SearchItem from './SearchItem'
import SearchLoading from './SearchLoading'
import SearchNotFound from './SearchNotFound'

const render_list = (list) => (
  list.map(item => {
    return (
      <SearchItem
        key={item.slug}
        product={item}/>
    )
  })
)

const DefaultSearch = () => (
  <h3>What are you looking for..</h3>
)

const FoundResult = ({result}) => (
  <div>
    <h3>Found {result.length} items</h3>
    {render_list(result)}
  </div>
)

const renderResult = (result, hasError, isLoading ,searchText) => {
  if(isLoading) return(<SearchLoading />)
  if (hasError)
    return ( <SearchNotFound searchText={searchText} />)
  else if (result.length > 0)
    return ( <FoundResult result={result} />)
  else
    return ( <DefaultSearch /> )
}

const SearchResult = ({
  result,
  hasError,
  searchText,
  isLoading
}) => (
  <div className="row">
    <div className="container">
      {renderResult(result, hasError, isLoading, searchText)}
    </div>
  </div>
)

SearchResult.propTypes = {
  result: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
}

export default SearchResult
