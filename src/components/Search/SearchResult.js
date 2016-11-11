import React from 'react'
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
  if (result.length > 0) return render_list(result)
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

export default SearchResult
