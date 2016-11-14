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

const RegisterApp = ({children, pageName}) => (
  <div>
    <HeaderBarApp
      title={pageName}/>
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
</div>
)

export default RegisterApp
