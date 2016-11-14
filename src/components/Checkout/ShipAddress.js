import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ShipAddress = () => (
	<div className="row">
		<div className="col s10 offset-s1 sb-grey-box">
			<div className="sb-edit-text"><a href="#!">Edit</a></div>

			<div className="sb-grey-box-header">
				Shipping Address:
			</div>

			<div className="sb-grey-box-address">
				Watcharaphat Manosatiankul, 31/99 Soi Pahollyyothai 34, <br />
				Phahollyyothai Rd., Senanikom, Pothong mansion 715, <br /> Bangkok,
				Chatuchak, TH, 10900
			</div>
		</div>
	</div>
)

export default ShipAddress
