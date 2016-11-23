import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManCustomerApp } from '../../../components'
import { loadCustomers } from '../../../actions/manage/manCustomer'

class ManCustomerAppContainer extends Component {
  componentDidMount() {
    this.props.loadCustomers()
  }

  render() {
    return (
      <ManCustomerApp
        customers={this.props.customers}/>
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.manProduct.custmers
})

const mapDispatchToProps = ({
  loadCustomers
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManCustomerAppContainer)
