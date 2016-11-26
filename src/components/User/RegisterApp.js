import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const HeaderBarApp = ({title}) => (
  <div className="nav-wrapper sbox-header-bar white-text">
    <div className="container">
      <div className="col s12 sbox-header-bread">
        <Link to={`${URL_ROOT}`} className="breadcrumb">
          <span>Home</span>
        </Link>
        <Link to={`${URL_ROOT}/register`} className="breadcrumb">
          <span>Register</span>
        </Link>
      </div>
      <h2 className="sbox-header-text">{title}</h2>
  </div>
</div>
)

const ProgressHeaderBar = () => (
  <div className="ui steps">
    <div className="step">
      <i className="truck icon"></i>
      <div className="content">
        <div className="title">Shipping</div>
        <div className="description">Choose your shipping options</div>
      </div>
    </div>
    <div className="active step">
      <i className="payment icon"></i>
      <div className="content">
        <div className="title">Billing</div>
        <div className="description">Enter billing information</div>
      </div>
    </div>
    <div className="disabled step">
      <i className="info icon"></i>
      <div className="content">
        <div className="title">Confirm Order</div>
      </div>
    </div>
  </div>
)

const RegisterApp = ({children, pageName}) => (
  <div>
    <HeaderBarApp
      title={pageName}/>
    <div className="container">
      <ProgressHeaderBar />
      <div className="row card">
        {children}
      </div>
    </div>
</div>
)

export default RegisterApp
