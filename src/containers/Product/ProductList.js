import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../../actions/product'
import { bindActionCreators } from 'redux'
import { ProductList, ProductItem } from '../../components'
import { addToCart } from '../../actions/cart'

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div>
      <ProductList title="New Arrival">
        {(this.props.products.length > 0) ? (
          this.props.products.map(product =>
            <ProductItem
              key={product.slug}
              product={product}
              onAddToCartClicked={() => addToCart(product.slug)}
            />
          )
        ): (
          <h3>Loading...</h3>
        )}
      </ProductList>
      <ProductList title="Best Seller">
        {(this.props.products.length > 0) ? (
          this.props.products.map(product =>
            <ProductItem
              key={product.slug}
              product={product}
              onAddToCartClicked={() => addToCart(product.slug)}
            />
          )
        ): (
          <h3>Loading...</h3>
        )}
      </ProductList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { loadProducts, addToCart })(ProductListContainer);
