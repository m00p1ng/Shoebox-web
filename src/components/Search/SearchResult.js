import React from 'react'
import SearchItem from './SearchItem'


const SearchResult = ({result}) => {
  const render_list = (list) => (
    list.map(item => {
      return (
        <SearchItem
          key={item.slug}
          product={item}/>
      )
    })
  )

  return (
    <div>
      {render_list(result)}
    </div>
  )
}

export default SearchResult
