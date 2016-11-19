import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

export const HeaderBar3StepApp = ({
	header,
	title1, link1,
	title2, link2
}) => (
	<div className="nav-wrapper sbox-header-bar-manage white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb"><span>Home</span></Link>
				<Link to={`${URL_ROOT}/manage`} className="breadcrumb"><span>Manage</span></Link>
        <Link to={`${URL_ROOT}/manage/${link1}`} className="breadcrumb"><span>{title1}</span></Link>
				<Link to={`${URL_ROOT}/manage/${link1}/${link2}`} className="breadcrumb"><span>{title2}</span></Link>
			</div>
			<h2 className="sbox-header-text">{header}</h2>
	</div>
</div>
)

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
