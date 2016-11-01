import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductDetail } from '../../components'
import { getProductBySlug } from '../../reducers/product'
import { loadProduct, clickAddToCart } from '../../actions/product'
import { browserHistory } from 'react-router';
import { URL_ROOT } from 'endpoint'

class ProductDetailContainer extends Component {


  componentDidMount() {
    this.props.loadProduct(this.props.params.slug)
  }

  render() {
    let not_hasError = this.props.error !== true
    return (
      <div>
        {
          not_hasError ? (
            <ProductDetail
              product={this.props.product}
              onClickedAddToCart={
                () => this.props.clickAddToCart(this.props.product.slug)
            }/>
          ): ( browserHistory.push(`${URL_ROOT}/404`) )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: getProductBySlug(state, ownProps.params.slug),
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProduct,
  clickAddToCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
