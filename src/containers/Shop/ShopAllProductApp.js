import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopAllProductApp } from '../../components'
import { loadProducts } from '../../actions/shop'

class ShopAllProductAppContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  handlePage(page) {
    this.props.loadProducts('latest', 16, page)
  }

  componentDidMount() {
    this.props.loadProducts('latest', 16, 1)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopAllProductApp
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
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopAllProductAppContainer)
