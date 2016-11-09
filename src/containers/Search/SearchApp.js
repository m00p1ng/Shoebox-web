import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'
import { searchProduct } from '../../actions/search'

class SearchAppContainer extends Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.props.searchProduct(event.target.value)
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
  searchProduct
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAppContainer)
