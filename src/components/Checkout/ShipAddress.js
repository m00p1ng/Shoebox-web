import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ShipAddress = ({user}) => (
	<div className="row">
		<div className="col s10 offset-s1 sb-grey-box">
			<div className="sb-edit-text"><a href="#!">Edit</a></div>

			<div className="sb-grey-box-header">
				Shipping Address:
			</div>

			<div className="sb-grey-box-address">
				<p>{user.firstname} {user.lastname}</p>
				<p>{user.ship.street}, {user.ship.district}, </p>
				<p>{user.ship.city}, {user.ship.zipcode}, USA</p>
			</div>
		</div>
	</div>
)

ShipAddress.propTypes = {
	user: PropTypes.object.isRequired
}

export default ShipAddress
