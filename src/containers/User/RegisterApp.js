import React, { Component } from 'react'
import { sendRegisterForm } from '../../actions/register'
import { connect } from 'react-redux'
import {
  RegisterApp,
  RegisterAccount,
  RegisterPersonalInfo,
  RegisterAddress,
  RegisterShipAddress,
  RegisterCreditCard
} from '../../components'

class RegisterAppContainer extends Component {
   constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  pageName() {
    const page = this.state.page
    if(page === 1) return "Account"
    if(page === 2) return "Personal Infomation"
    if(page === 3) return "Address"
    if(page === 4) return "Ship Address"
    if(page === 5) return "Credit Cart"
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return(
      <RegisterApp pageName={this.pageName()}>
        {page === 1 && <RegisterAccount onSubmit={this.nextPage}/>}
        {page === 2 && <RegisterPersonalInfo previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <RegisterAddress previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <RegisterShipAddress previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 5 && <RegisterCreditCard previousPage={this.previousPage} onSubmit={onSubmit} sendRegisterForm={this.props.sendRegisterForm}/>}
      </RegisterApp>
    )
  }
}

export default connect(null, { sendRegisterForm })(RegisterAppContainer)
