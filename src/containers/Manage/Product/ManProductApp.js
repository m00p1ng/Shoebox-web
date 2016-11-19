import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductApp } from '../../../components'
import { loadLastestProducts } from '../../../actions/product'

class ManProductAppContainer extends Component {
  componentDidMount() {
    this.props.loadLastestProducts()
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
  loadLastestProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManProductAppContainer)
