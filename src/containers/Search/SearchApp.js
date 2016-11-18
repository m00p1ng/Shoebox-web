import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'
import {
  searchProduct,
  clearSearch
} from '../../actions/search'

class SearchAppContainer extends Component {
  constructor() {
      super()
      this.state = {
        search: ''
      }
  }

  componentWillUnmount() {
    this.props.clearSearch()
  }

  onSearchChange(event) {
    const value = event.target.value
    this.setState({search: value})
    if (value.length > 0)
      this.props.searchProduct(value)
    else {
      this.props.clearSearch()
      this.setState({search: ''})
    }
  }

  render() {
    return (
      <SearchApp
        onSearchChange={this.onSearchChange.bind(this)}
        result={this.props.searchResult}
        searchText={this.state.search}
        isLoading={this.props.isLoading}
        hasError={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.search['result'],
  error: state.search['error'],
  isLoading: state.search['isLoading']
})

const mapDispatchToProps = ({
  searchProduct,
  clearSearch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAppContainer)
