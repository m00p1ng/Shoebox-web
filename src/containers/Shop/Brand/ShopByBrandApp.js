import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopByBrandApp } from '../../../components'
import {
  loadProductsByBrand,
  clearProducts
} from '../../../actions/shop'

class ShopByBrandAppContainer extends Component {
  handlePage(page) {
    this.props.loadProductsByBrand(this.props.params.brand, 24, page)
  }

  componentDidMount() {
    this.props.loadProductsByBrand(this.props.params.brand, 24, 1)
  }

  componentWillUnmount() {
    this.props.clearProducts()
  }

  componentWillReceiveProps(newProps) {
    if (this.props.products === newProps.products) {
      this.props.loadProductsByBrand(newProps.params.brand, 24, 1)
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    let brand = this.props.params.brand
    return (
      <ShopByBrandApp
        brand={brand}
        products={this.props.products}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalProduct={this.props.totalProduct}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
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
  loadProductsByBrand,
  clearProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopByBrandAppContainer)
