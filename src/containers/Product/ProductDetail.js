import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProduct } from '../../actions/product'
import { bindActionCreators } from 'redux'
import { getProductBySlug } from '../../reducers/product'
import { ProductDetail } from '../../components'

class ProductDetailContainer extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.params.slug)
  }

  render() {
    return(
      <ProductDetail product={this.props.product} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: getProductBySlug(state, ownProps.params.slug)
})

const mapDispatchToProps = ({
  loadProduct
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)
