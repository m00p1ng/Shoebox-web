import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchApp } from '../../components'

class SearchAppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <SearchApp
        onSearchChange={this.onSearchChange}
        text={this.state.search}/>
    )
  }
}

export default connect()(SearchAppContainer)
