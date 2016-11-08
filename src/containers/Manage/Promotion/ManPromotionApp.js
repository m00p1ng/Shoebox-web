import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManPromotionApp } from '../../../components'

class ManPromotionAppContainer extends Component {
  render() {
    return (
      <ManPromotionApp />
    )
  }
}

export default connect()(ManPromotionAppContainer)
