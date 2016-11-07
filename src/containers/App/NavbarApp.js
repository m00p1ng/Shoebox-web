import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavbarApp } from '../../components'
import { getUsername } from '../../actions/user'

class NavbarAppContainer extends Component {
  static propTypes = {
    numberOfcartItem: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    getUsername: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getUsername()
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
  getUsername
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarAppContainer)
