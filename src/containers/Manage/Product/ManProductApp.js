import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductApp } from '../../../components'
import { loadProducts } from '../../../actions/manage/manProduct'

class ManProductAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts(20, 1)
  }

  handlePage(page) {
    this.props.loadProducts(20, page)
  }

  render() {
    return (
      <ManProductApp
        products={this.props.products}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalProduct={this.props.totalProduct}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.manProduct.products,
  totalPage: state.manProduct['totalPage'],
  error: state.manProduct['error'],
  totalProduct: state.manProduct['totalProduct'],
  page: state.manProduct['page']
})

const mapDispatchToProps = ({
  loadProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManProductAppContainer)
