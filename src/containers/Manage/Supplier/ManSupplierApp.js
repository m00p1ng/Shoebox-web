import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManSupplierApp } from '../../../components'
import { loadSuppliers } from '../../../actions/manage/manSupplier'

class ManSupplierAppContainer extends Component {
  componentDidMount() {
    this.props.loadSuppliers()
  }

  render() {
    return (
      <ManSupplierApp
        suppliers={this.props.suppliers}/>
    )
  }
}

const mapStateToProps = (state) => ({
  suppliers: state.manSupplier.suppliers
})

const mapDispatchToProps = (state) => ({
  loadSuppliers
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManSupplierAppContainer)
