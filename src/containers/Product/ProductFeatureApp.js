import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductFeatureApp } from '../../components'

class ProductFeatureAppContainer extends Component {
  render() {
    return (
      <ProductFeatureApp />
    )
  }
}

export default connect()(ProductFeatureAppContainer)
