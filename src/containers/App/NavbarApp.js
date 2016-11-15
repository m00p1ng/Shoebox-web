import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavbarApp } from '../../components'
import { getUsername } from '../../actions/user'
import {
  getCustomerDetail,
  getEmployeeDetail
} from '../../actions/user'

class NavbarAppContainer extends Component {
  static propTypes = {
    numberOfcartItem: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    getUsername: PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.getUsername().then(() => {
      if(this.props.role.toLowerCase() === 'customer')
        this.props.getCustomerDetail(this.props.username)
      else if(this.props.role.toLowerCase() === 'employee')
        this.props.getEmployeeDetail(this.props.username)
    })
  }

  showUsername() {
    if(this.props.username === '') {
      return 'Guest'
    }
    else {
      return this.props.username
    }
  }

  render() {
    return (
      <NavbarApp
        NumberOfCartItem={this.props.numberOfcartItem}
        Username={this.showUsername()}
        Role={this.props.role}/>
    )
  }
}

const mapStateToProps = (state) => ({
  numberOfcartItem: state.cart.addedIds.length,
  username: state.user.username,
  role: state.user.role
})

const mapDispatchToProps = ({
  getUsername,
  getCustomerDetail,
  getEmployeeDetail
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarAppContainer)
