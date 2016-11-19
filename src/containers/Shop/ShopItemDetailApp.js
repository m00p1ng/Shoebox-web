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

  renderShopItemDetail(product, error) {
    let hasError = error === true
    let hasProduct = product.length > 0

    if(hasError) {
      return browserHistory.push(`${URL_ROOT}/404`)
    } else if(hasProduct) {
      return (
        <ShopItemDetailApp
          product={product[0]}
          onClickedAddToCart={() => {
            this.onClickedAddToCart(product[0])
          }} />
      )
    }
    // else {
    //   return (
    //     <Loading />
    //   )
    // }
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
