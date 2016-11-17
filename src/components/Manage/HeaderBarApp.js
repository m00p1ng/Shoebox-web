import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

export const HeaderBar2StepApp = ({title, link}) => (
	<div className="nav-wrapper sbox-header-bar-manage white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb"><span>Home</span></Link>
				<Link to={`${URL_ROOT}/manage`} className="breadcrumb"><span>Manage</span></Link>
        <Link to={`${URL_ROOT}/manage/${link}`} className="breadcrumb"><span>{title}</span></Link>
			</div>
			<h2 className="sbox-header-text">{title}</h2>
	</div>
</div>
)

export const HeaderBarApp = () => (
	<div className="nav-wrapper sbox-header-bar-manage white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb">
					<span>Home</span>
				</Link>
				<Link to={`${URL_ROOT}/manage`} className="breadcrumb">
					<span>Manage</span>
				</Link>
			</div>
			<h2 className="sbox-header-text">Dashboard</h2>
	</div>
</div>
)
