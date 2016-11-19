import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductApp } from '../../../components'
import { loadProducts } from '../../../actions/product'

class ManProductAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <ManProductApp
        products={this.props.products}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManProductAppContainer)
