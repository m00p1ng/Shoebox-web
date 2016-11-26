import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManOrderApp } from '../../../components'
import { loadAllOrders } from '../../../actions/manage/manOrder'

class ManOrderAppContainer extends Component {
  componentDidMount() {
    this.props.loadAllOrders()
  }

  render() {
    return (
      <ManOrderApp
        orders={this.props.orders} />
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.manOrder.orders
})

const mapDispatchToProps = ({
  loadAllOrders
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManOrderAppContainer)
