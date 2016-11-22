import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopItemDetailApp } from '../../components'
import {
  loadProduct,
  clearProduct,
  clickAddToCart,
  updateViews
} from '../../actions/product'
import { browserHistory } from 'react-router';
import { URL_ROOT } from 'endpoint'

const Loading = () => (
  <div className="col l10 s12">
    <div className="container center">
      <h1 className="grey-text text-darken-2">Loading...</h1>
      <div className="progress cyan lighten-3">
        <div className="indeterminate cyan darken-1"></div>
      </div>
    </div>
  </div>
)

class ShopItemDetailAppContainer extends Component {
  static propTypes = {
    product: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProduct: PropTypes.func.isRequired,
    updateViews: PropTypes.func.isRequired,
    clickAddToCart: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadProduct(this.props.params.slug)
    this.props.updateViews(this.props.params.slug)
  }

  componentWillUnmount() {
    this.props.clearProduct()
  }

  onClickedAddToCart(product) {
    Materialize.toast(
      `Add&nbsp;&nbsp;
        <strong>${product.name}</strong>
      &nbsp;&nbsp;to cart`,
      2000, 'amber darken-1')
    this.props.clickAddToCart(product.slug, product, product.price)
  }

  renderShopItemDetail(product, error) {
    let hasError = error === true
    let hasProduct = product.length > 0

    if(hasError) {
      return browserHistory.push(`${URL_ROOT}/404`)
    } else if(hasProduct && !this.props.isLoading) {
      return (
        <ShopItemDetailApp
          product={product[0]}
          onClickedAddToCart={() => {
            this.onClickedAddToCart(product[0])
          }} />
      )
    }
    else {
      return ( <Loading /> )
    }
  }

  render() {
    const {product, error} = this.props
    return (
      <div>
        {this.renderShopItemDetail(product, error)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product['detail'],
  error: state.product['error'],
  isLoading: state.product['isLoading']
})

const mapDispatchToProps = ({
  loadProduct,
  clearProduct,
  updateViews,
  clickAddToCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItemDetailAppContainer);
