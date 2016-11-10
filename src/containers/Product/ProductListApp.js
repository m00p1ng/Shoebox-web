import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ProductListApp, ProductItem } from '../../components'
import {
  loadProducts,
  clickAddToCart
} from '../../actions/product'
import Loading from '../../constants/Loading/Loading'

class ProductListAppContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  onClickedAddToCart(name, slug, product, price) {
    Materialize.toast(
      `Add&nbsp;&nbsp;
        <strong>${name}</strong>
      &nbsp;&nbsp;to cart`,
      2000, 'rounded amber darken-1')
    return this.props.clickAddToCart(slug, product, price)
  }

  renderProducts(products) {
    return products.map(product =>
      <ProductItem
        key={product.slug}
        product={product}
        onClickedAddToCart={
          () => this.onClickedAddToCart(product.name, product.slug, product, product.price)
        }
      />
    )
  }

  render() {
    let not_hasError = this.props.error !== true
    let hasProducts = this.props.products.length > 1
    return (
      <div>
        {
        not_hasError ? (
          hasProducts ? (
            <ProductListApp
              title="New Arrival"
              products={this.props.products} >
              {this.renderProducts(this.props.products)}
            </ProductListApp>
          ): ( <Loading /> )
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListAppContainer);
