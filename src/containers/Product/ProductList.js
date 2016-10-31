import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ProductList, ProductItem } from '../../components'
import { loadProducts } from '../../actions/product'
import { addToCart } from '../../actions/cart'

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

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = ({
  loadProducts,
  addToCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
