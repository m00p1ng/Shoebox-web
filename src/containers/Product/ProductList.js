import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../../actions/product'
import { bindActionCreators } from 'redux'
import { ProductList } from '../../components'

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <ProductList products={this.props.products} />
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { loadProducts })(ProductListContainer);
