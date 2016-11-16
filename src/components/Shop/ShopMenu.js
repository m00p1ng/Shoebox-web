import React from 'react'

const ShopMenu = () => (
  <div className="col l2 m12 hide-on-small-only sb-shop-nav-panel">
		<div className="collection">
			<a className="collection-item active orange darken-2">
        Featured Item
      </a>
			<a className="collection-item">
        <span className="sb-collection-black-text">
          Best Seller
        </span>
      </a>
			<a className="collection-item">
        <span className="sb-collection-black-text">
          New Arrival
        </span>
      </a>

			<div className="collection-item sb-collection-black-text grey lighten-4">
        Brand
      </div>
			<a className="collection-item">
        <span className="sb-collection-black-text-brand">
          &nbsp;&nbsp;- Nike
        </span>
      </a>
			<a className="collection-item">
        <span className="sb-collection-black-text-brand">
          &nbsp;&nbsp;- Vans
        </span>
      </a>
			<a className="collection-item">
        <span className="sb-collection-black-text-brand">
          &nbsp;&nbsp;- Converse
        </span>
      </a>
			<a className="collection-item">
        <span className="sb-collection-black-text-brand">
          &nbsp;&nbsp;- Allen Edmonds
        </span>
      </a>
		</div>
	</div>
)

export default ShopMenu
