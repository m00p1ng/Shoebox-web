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
      <OrderHistoryApp />
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order['order']
})

const mapDispatchtoProps = ({
  loadOrderHistory
})

export default connect(
  null,
  mapDispatchtoProps
)(OrderHistoryAppContainer)
