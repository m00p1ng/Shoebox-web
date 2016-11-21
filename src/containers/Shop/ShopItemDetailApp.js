import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShopItemDetailApp } from '../../components'
import {
  loadProduct,
  clickAddToCart,
  updateViews
} from '../../actions/product'
import { browserHistory } from 'react-router';
import { URL_ROOT } from 'endpoint'

class ShopItemDetailAppContainer extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
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

  renderShopItemDetail() {
    const { product, error, isLoading } = this.props

    if(error) {
      return browserHistory.push(`${URL_ROOT}/404`)
    } else if(!isLoading) {
      return (
        <ShopItemDetailApp
          product={product}
          onClickedAddToCart={() => {
            this.onClickedAddToCart(product)
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
    return (
      <div>
        {this.renderShopItemDetail()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product['product'],
  error: state.product['error'],
  isLoading: state.product['isLoading']
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
