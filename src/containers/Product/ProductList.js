import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductList, ProductItem } from '../../components'
import { loadProducts, clickAddToCart } from '../../actions/product'

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    let not_hasError = this.props.error !== true
    let hasProducts = this.props.products.length > 0
    return (
      <div>
        <ProductList title="New Arrival" products={this.props.products} >
        {
          not_hasError ? (
            hasProducts ? (
              this.props.products.map(product =>
                <ProductItem
                  key={product.slug}
                  product={product}
                  onClickedAddToCart={() => this.props.clickAddToCart(product.slug)}
                />
              )
            ): ( <h3>Loading...</h3> )
          ) : ( <h3>Error</h3> )
        }
        </ProductList>
        {/* <ProductList title="Best Seller" products={this.props.products} >
        {
          not_hasError ? (
            hasProducts ? (
              this.props.products.map(product =>
                <ProductItem
                  key={product.slug}
                  product={product}
                  onClickedAddToCart={() => this.props.clickAddToCart(product.slug)}
                />
              )
            ): ( <h3>Loading...</h3> )
          ) : ( <h3>Error</h3> )
        }
        </ProductList> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products['products'],
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProducts,
  clickAddToCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
