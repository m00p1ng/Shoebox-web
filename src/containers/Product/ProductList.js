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
        <ProductList
          title="New Arrival"
          products={this.props.products} >
          {
            not_hasError ? (
              hasProducts ? (
                this.props.products.map(product =>
                  <ProductItem
                    key={product.slug}
                    product={product}
                    onClickedAddToCart={() => {
                      Materialize.toast(
                        `Add&nbsp;&nbsp;
                          <strong>${product.name}</strong>
                        &nbsp;&nbsp;to cart`,
                        2000, 'rounded amber darken-1')
                      return this.props.clickAddToCart(product.slug)
                    }}
                  />
                )
              ): ( <h3>Loading...</h3> )
            ) : ( <h3>Can't Fetch data</h3> )
          }
        </ProductList>
        <ProductList
          title="New Arrival"
          products={this.props.products} >
          {
            not_hasError ? (
              hasProducts ? (
                this.props.products.map(product =>
                  <ProductItem
                    key={product.slug}
                    product={product}
                    onClickedAddToCart={() => {
                      Materialize.toast(`Add ${product.name} to cart`, 2000)
                      return this.props.clickAddToCart(product.slug)
                    }}
                  />
                )
              ): ( <h3>Loading...</h3> )
            ) : ( <h3>Can't Fetch data</h3> )
          }
        </ProductList>
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
