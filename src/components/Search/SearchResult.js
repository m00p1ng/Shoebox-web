import React from 'react'
import SearchItem from './SearchItem'


const SearchResult = ({
  result,
  hasError,
  searchText,
  isLoading
}) => {
  const render_list = (list) => (
    list.map(item => {
      return (
        <SearchItem
          key={item.slug}
          product={item}/>
      )
    })
  )

  const renderResult = (result, hasError, isLoading) => {
    // if(!isLoading) {
      if (!hasError) {
        if (result.length > 0) return render_list(result)
        else return (<h3>What are you looking for..</h3>)
      }
      else return (<h3>Oh sorry, {searchText} Not found</h3>)
    // }
    // else return(<h1>Loading...</h1>)
  }

  return (
    <div>
      {renderResult(result, hasError, isLoading)}
    </div>
  )
}

export default SearchResult
