import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ProductDetailApp } from '../../components'
import { loadProduct, clickAddToCart, updateViews } from '../../actions/product'
import { browserHistory } from 'react-router';
import Loading from '../../constants/Loading/Loading'
import { URL_ROOT } from 'endpoint'

class ProductDetailAppContainer extends Component {
  static propTypes = {
    product: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.loadProduct(this.props.params.slug)
    this.props.updateViews(this.props.params.slug)
  }

  onClickedAddToCart(product) {
    Materialize.toast(
      `Add&nbsp;&nbsp;
        <strong>${product.name}</strong>
      &nbsp;&nbsp;to cart`,
      2000, 'rounded amber darken-1')
    this.props.clickAddToCart(product.slug, product)
  }

  render() {
    let not_hasError = this.props.error !== true
    let hasProduct = this.props.product.length > 0
    return (
      <div>
        {
          not_hasError ? (
            hasProduct ? (
              <ProductDetailApp
                product={this.props.product[0]}
                onClickedAddToCart={() => this.onClickedAddToCart(this.props.product[0])} />
            ): ( <Loading /> )
          ): ( browserHistory.push(`${URL_ROOT}/404`) )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
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
)(ProductDetailAppContainer);
