import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopItemDetailApp } from '../../components'
import {
  loadProduct,
  clickAddToCart,
  updateViews
} from '../../actions/product'
import { browserHistory } from 'react-router';
import Loading from '../../constants/Loading/Loading'
import { URL_ROOT } from 'endpoint'

class ShopItemDetailAppContainer extends Component {
  static propTypes = {
    product: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loadProduct: PropTypes.func.isRequired,
    updateViews: PropTypes.func.isRequired,
    clickAddToCart: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.loadProduct(this.props.params.slug)
    this.props.updateViews(this.props.params.slug)
  }

  onClickedAddToCart(product) {
    Materialize.toast(
      `Add&nbsp;&nbsp;
        <strong>${product.name}</strong>
      &nbsp;&nbsp;to cart`,
      2000, 'amber darken-1')
    this.props.clickAddToCart(product.slug, product, product.price)
  }

  render() {
    let not_hasError = this.props.error !== true
    let hasProduct = this.props.product.length > 0
    return (
      <div>
        {
          not_hasError ? (
            hasProduct ? (
              <ShopItemDetailApp
                product={this.props.product[0]}
                onClickedAddToCart={() => {
                  this.onClickedAddToCart(this.props.product[0])
                }} />
            ): ( <Loading /> )
          ): ( browserHistory.push(`${URL_ROOT}/404`) )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.products.detail,
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProduct,
  updateViews,
  clickAddToCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItemDetailAppContainer);
