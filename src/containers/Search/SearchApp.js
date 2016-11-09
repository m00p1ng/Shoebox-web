import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'
import {
  searchProduct,
  clearSearch
} from '../../actions/search'

class SearchAppContainer extends Component {
  componentDidMount() {
    this.props.clearSearch()
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
        onSearchChange={this.onSearchChange.bind(this)}
        result={this.props.searchResult}
        hasError={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.search['result'],
  error: state.search['error']
})

const mapDispatchToProps = ({
  searchProduct,
  clearSearch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAppContainer)
