import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { registerCustomer } from '../../actions/user'

class TestRegisContainer extends Component {
  componentDidMount() {
    this.props.registerCustomer({
      username: "eiei1234",
      password: "haha",
      repassword: "haha",
      email: "mail@facebook.com",
      firstname: "kaoneaw",
      lastname: "mooping",
      gender: "male",
      birthday: {
        year: 2000,
        month: 10,
        day: 10
      },
      address: {
        city: "my-city",
        district: "my-district",
        street: "my-street",
        zipcode: "99999"
      },
      ship: {
        city: "my-city",
        district: "my-district",
        street: "my-street",
        zipcode: "99999"
      },
      credit : {
          type : "XXX",
          id : "6625526",
          exp : {
              year: 2000,
              month: 10
          },
      },
      phone: "080-000-0000"
    })
  }

  render() {
    return (
      <h1>TestRegis</h1>
    )
  }
}

const mapDispatchToProps = ({
  registerCustomer
})

export default connect(null, mapDispatchToProps)(TestRegisContainer)
