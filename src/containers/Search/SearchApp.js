import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'
import {
  searchProduct,
  clearSearch
} from '../../actions/search'

class SearchAppContainer extends Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    const value = event.target.value
    if (value.length > 0)
      this.props.searchProduct(value)
    else {
      this.props.clearSearch()
    }
  }

  render() {
    return (
      <SearchApp
        onSearchChange={this.onSearchChange}
        handleSubmit={this.handleSubmit}
        result={this.props.searchResult}/>
    )
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.search['result']
})

const mapDispatchToProps = ({
  searchProduct,
  clearSearch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAppContainer)
