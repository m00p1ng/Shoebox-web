import React from 'react'
import ErrorMsg from './Form/ErrorMsg'
import HeaderBarApp from '../App/HeaderBarApp'

const RegisterApp = ({children}) => (
  <div>
    <HeaderBarApp
      title="Register"
      link="register"/>
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
</div>
)

export default RegisterApp
