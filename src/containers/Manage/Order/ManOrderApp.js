import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManOrderApp } from '../../../components'
import { loadAllOrders } from '../../../actions/manage/manOrder'

class ManOrderAppContainer extends Component {
  componentDidMount() {
    this.props.loadAllOrders(20, 1)
  }

  handlePage(page) {
    this.props.loadAllOrders(20, page)
  }

  render() {
    return (
      <ManOrderApp
        orders={this.props.orders}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalOrder={this.props.totalOrder}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.manOrder['orders'],
  totalPage: state.manOrder['totalPage'],
  error: state.manOrder['error'],
  totalOrder: state.manOrder['totalOrder'],
  page: state.manOrder['page']
})

const mapDispatchToProps = ({
  loadAllOrders
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManOrderAppContainer)
