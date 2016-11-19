import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopAllProductApp } from '../../components'
import { loadProducts } from '../../actions/product'
import Loading from '../../constants/Loading/Loading'

class ShopAllProductAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
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
  products: state.products['products'],
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopAllProductAppContainer)
