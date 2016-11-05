import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopBestSellerApp } from '../../components'

class ShopBestSellerAppContainer extends Component {
  render() {
    return (
      <ShopBestSellerApp />
    )
  }
}

export default connect()(ShopBestSellerAppContainer)
