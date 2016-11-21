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

  componentDidMount() {
    this.props.loadProducts('latest')
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopAllProductApp
        products={this.props.products}
        error={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.shop['products'],
  error: state.shop['error']
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopAllProductAppContainer)
