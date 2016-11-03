import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductListApp, ProductItem } from '../../components'
import { loadProducts, clickAddToCart } from '../../actions/product'

class ProductListAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    let not_hasError = this.props.error !== true
    let hasProducts = this.props.products.length > 0
    return (
      <div>
        {
        not_hasError ? (
          hasProducts ? (
            <ProductListApp
              title="New Arrival"
              products={this.props.products} >
              {
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
              }
            </ProductListApp>
          ): ( <h1>Loading...</h1> )
        ) : ( <h1>Can't Fetch data</h1> )
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListAppContainer);
