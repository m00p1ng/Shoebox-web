import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductBestSellerApp } from '../../components'

class ProductBestSellerAppContainer extends Component {
  render() {
    return (
      <ProductBestSellerApp />
    )
  }
}

export default connect()(ProductBestSellerAppContainer)
