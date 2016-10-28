import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loadProducts } from '../../actions/product'
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
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ products: loadProducts }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductListContainer)
