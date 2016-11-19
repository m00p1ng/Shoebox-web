import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopApp } from '../../components'
import { loadLatestProducts } from '../../actions/product'

class ShopAppContainer extends Component {
  componentDidMount() {
    this.props.loadLatestProducts()
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
  products: state.products['products'],
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadLatestProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopAppContainer)
