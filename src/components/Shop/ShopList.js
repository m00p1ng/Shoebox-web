import React from 'react'
import ShopItem from './ShopItem'

const ShopList = () => (
	<div className="col l9 s12 card white">
  	<div className="row">
      <ShopItem />
			<ShopItem />
			<ShopItem />
			<ShopItem />
		</div>
		<div className="divider grey lighten-3"></div>
		<div className="row">
			<ShopItem />
			<ShopItem />
			<ShopItem />
			<ShopItem />
		</div>
		<div className="divider grey lighten-3"></div>
		<div className="row">
			<ShopItem />
			<ShopItem />
			<ShopItem />
			<ShopItem />
		</div>
		<div className="divider grey lighten-3"></div>
		<div className="row">
			<ShopItem />
			<ShopItem />
			<ShopItem />
			<ShopItem />
    </div>
  </div>
)

export default ShopList
