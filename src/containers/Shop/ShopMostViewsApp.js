import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopMostViewsApp } from '../../components'
import {
  loadProducts,
  clearProducts
} from '../../actions/product'

class ShopMostViewsAppContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadProducts('top-view')
  }

  componentWillUnmount() {
    this.props.clearProducts()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopMostViewsApp
        products={this.props.products}
        error={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products['products'],
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProducts,
  clearProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopMostViewsAppContainer)
