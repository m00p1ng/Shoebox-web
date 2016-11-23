import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopNewArrivalApp } from '../../components'
import {
  loadProducts,
  clearProducts
} from '../../actions/shop'

class ShopNewArrivalAppContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  handlePage(page) {
    this.props.loadProducts('latest', 12, page)
  }

  componentDidMount() {
    this.props.loadProducts('latest', 12, 1)
  }

  componentWillUnmount() {
    this.props.clearProducts()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopNewArrivalApp
        products={this.props.products}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalProduct={this.props.totalProduct}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)}/>
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
  loadProducts,
  clearProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopNewArrivalAppContainer)
