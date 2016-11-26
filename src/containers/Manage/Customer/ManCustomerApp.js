import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManCustomerApp } from '../../../components'
import { loadCustomers } from '../../../actions/manage/manCustomer'

class ManCustomerAppContainer extends Component {
  componentDidMount() {
    this.props.loadCustomers(20, 1)
  }

  handlePage(page) {
    this.props.loadCustomers(20, page)
  }

  render() {
    return (
      <ManCustomerApp
        customers={this.props.customers}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalCustomer={this.props.totalCustomer}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.manCustomer.customers,
  totalPage: state.manCustomer['totalPage'],
  error: state.manCustomer['error'],
  totalCustomer: state.manCustomer['totalCustomer'],
  page: state.manCustomer['page']
})

const mapDispatchToProps = ({
  loadCustomers
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManCustomerAppContainer)
