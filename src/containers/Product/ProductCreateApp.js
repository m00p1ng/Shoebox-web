import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductCreateApp } from '../../components'

class ProductCreateAppContainer extends Component {
  render() {
    return (
      <ProductCreateApp />
    )
  }
}

export default connect()(ProductCreateAppContainer)
