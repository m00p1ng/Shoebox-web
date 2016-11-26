import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManSupplierApp } from '../../../components'
import { loadSuppliers } from '../../../actions/manage/manSupplier'

class ManSupplierAppContainer extends Component {
  componentDidMount() {
    this.props.loadSuppliers(20, 1)
  }

  handlePage(page) {
    this.props.loadSuppliers(20, page)
  }

  render() {
    return (
      <ManSupplierApp
        suppliers={this.props.suppliers}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalSupplier={this.props.totalSupplier}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  suppliers: state.manSupplier.suppliers,
  totalPage: state.manSupplier['totalPage'],
  error: state.manSupplier['error'],
  totalSupplier: state.manSupplier['totalSupplier'],
  page: state.manSupplier['page']
})

const mapDispatchToProps = ({
  loadSuppliers
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManSupplierAppContainer)
