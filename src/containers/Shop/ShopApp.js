import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopApp } from '../../components'
import { loadProducts } from '../../actions/shop'

class ShopAppContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopApp
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
)(ShopAppContainer)
