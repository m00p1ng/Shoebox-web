import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

export const HeaderBarApp = ({title, link}) => (
	<div className="nav-wrapper sbox-header-bar white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb">
					<span>Home</span>
				</Link>
				<Link to={`${URL_ROOT}/${link}`} className="breadcrumb">
					<span>{title}</span>
				</Link>
			</div>
			<h2 className="sbox-header-text">{title}</h2>
	</div>
</div>
)

HeaderBarApp.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export const HeaderBar2StepApp = ({header, title1, link1, title2, link2}) => (
	<div className="nav-wrapper sbox-header-bar white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb">
					<span>Home</span>
				</Link>
				<Link to={`${URL_ROOT}/${link1}`} className="breadcrumb">
					<span>{title1}</span>
				</Link>
				<Link to={`${URL_ROOT}/${link1}/${link2}`} className="breadcrumb">
					<span>{title2}</span>
				</Link>
			</div>
			<h2 className="sbox-header-text">{header}</h2>
	</div>
</div>
)

HeaderBarApp.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
}

HeaderBar2StepApp.propTypes = {
	header: PropTypes.string.isRequired,
	title1: PropTypes.string.isRequired,
	link1: PropTypes.string.isRequired,
	title2: PropTypes.string.isRequired,
	link2: PropTypes.string.isRequired
}
