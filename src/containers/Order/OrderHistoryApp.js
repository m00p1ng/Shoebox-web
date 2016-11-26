import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderHistoryApp } from '../../components'
import { loadOrderHistory } from '../../actions/order'

class OrderHistoryAppContainer extends Component {
  componentDidMount() {
    this.props.loadOrderHistory(10, 1)
  }

  handlePage(page) {
    this.props.loadOrderHistory(10, page)
  }

  render() {
    return (
      <OrderHistoryApp
        orders={this.props.order}
        error={this.props.error}
        totalPage={this.props.totalPage}
        totalOrder={this.props.totalOrder}
        activePage={this.props.page}
        handlePage={this.handlePage.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order['order'],
  error: state.order['error'],
  totalPage: state.order['totalPage'],
  totalOrder: state.order['totalOrder'],
  page: state.order['page']
})

const mapDispatchtoProps = ({
  loadOrderHistory
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(OrderHistoryAppContainer)
