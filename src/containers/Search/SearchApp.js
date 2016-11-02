import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'

class SearchAppContainer extends Component {
  render() {
    return (
      <SearchApp />
    )
  }
}

export default connect()(SearchAppContainer)
