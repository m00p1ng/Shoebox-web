import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ProductList } from '../../components'
import { loadProducts } from '../../actions/product'

class ProductListContainer extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products;
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div>
        <ProductList title="New Arrival" products={this.props.products} />
        <ProductList title="Best Seller" products={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
