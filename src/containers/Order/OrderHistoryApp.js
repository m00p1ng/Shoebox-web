import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderHistoryApp } from '../../components'
import { loadOrderHistory } from '../../actions/order'

class OrderHistoryAppContainer extends Component {
  componentDidMount() {
    this.props.loadOrderHistory()
  }

  render() {
    return (
      <OrderHistoryApp
        orders={this.props.order}
        error={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order['order'],
  error: state.order['error']
})

const mapDispatchtoProps = ({
  loadOrderHistory
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(OrderHistoryAppContainer)
