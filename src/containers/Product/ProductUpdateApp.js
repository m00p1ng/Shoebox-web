import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductUpdateApp } from '../../components'

class ProductUpdateAppContainer extends Component {
  render() {
    return (
      <ProductUpdateApp />
    )
  }
}

export default connect()(ProductUpdateAppContainer)
