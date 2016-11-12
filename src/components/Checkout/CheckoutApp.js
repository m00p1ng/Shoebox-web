import React from 'react'
import ShipAddress from './ShipAddress'
import CheckoutList from './CheckoutList'
import PaymentMethod from './PaymentMethod'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const HeaderBarApp = () => (
	<div className="nav-wrapper sbox-header-bar white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb"><span>Home</span></Link>
				<Link to={`${URL_ROOT}/cart`} className="breadcrumb"><span>My Cart</span></Link>
        <Link to={`${URL_ROOT}/checkout`} className="breadcrumb"><span>Checkout</span></Link>
			</div>
			<h2 className="sbox-header-text">Checkout</h2>
	</div>
</div>
)

const CheckoutApp = () => (
  <div>
    <HeaderBarApp />
    <div className="container">
			<div className="card white">
        <ShipAddress />
        <CheckoutList />
        <CheckoutList />
        <CheckoutList />
        <CheckoutList />
    		<div className="row">
  				<div className="col s10 offset-s1 divider grey"></div>
  			</div>
        <PaymentMethod />
      </div>
    </div>
  </div>
)

export default CheckoutApp
