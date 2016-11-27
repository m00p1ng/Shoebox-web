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
    <div className="active step">
      <div className="content">
        <div className="title">Account</div>
        <div className="description">Get your username</div>
      </div>
    </div>
    <div className="step">
      <div className="content">
        <div className="title">Personal information</div>
        <div className="description">Tell us your information</div>
      </div>
    </div>
    <div className="step">
      <div className="content">
        <div className="title">Address</div>
        <div className="description">Where do you live?</div>
      </div>
    </div>
    <div className="step">
      <div className="content">
        <div className="title">Shipping Address</div>
        <div className="description">Where to ship your package</div>
      </div>
    </div>
    <div className="step">
      <div className="content">
        <div className="title">Credit Card</div>
        <div className="description">Add your credit card</div>
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
      <div className="row">
      <div className="card">
        <div className="card-content no-padding">
          {children}
        </div>
      </div>
      </div>
    </div>
  </div>
)

export default RegisterApp
