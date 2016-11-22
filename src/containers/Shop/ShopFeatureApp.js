import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopFeatureApp } from '../../components'
import { loadProducts } from '../../actions/shop'

class ShopFeatureAppContainer extends Component {
  render() {
    return (
      <ShopFeatureApp
        products={this.props.products}
        error={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.shop['products'],
  error: state.shop['error'],
  totalPage: state.shop['totalPage'],
  totalProduct: state.shop['totalProduct'],
  page: state.shop['page']
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopFeatureAppContainer)
