import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductApp } from '../../../components'
import {
  loadProducts,
  clearProducts
} from '../../../actions/manage/manProduct'

class ManProductAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  componentWillUnmount() {
    this.props.clearProducts()
  }

  render() {
    return (
      <ManProductApp
        products={this.props.products}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.manProduct.products
})

const mapDispatchToProps = ({
  loadProducts,
  clearProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManProductAppContainer)
