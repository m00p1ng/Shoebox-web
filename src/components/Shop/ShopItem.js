import React from 'react'

const ShopItem = () => (
  <div className="col l3 m4 s6 sb-shop-item center">
		<div className="sb-hover-zoom">
			<a href="https://www.google.co.th/">
				<img
          src="https://ae01.alicdn.com/kf/HTB1shrTLpXXXXX.XFXXq6xXFXXXB/Women-Shoes-2016-Spring-Summer-Women-Casual-Shoes-8-Colors-Fashion-Canvas-Shoes-Breathable-Solid-Color.jpg"
          alt="shop-item-img" />
			</a>
			<a className="chip" href="https://www.facebook.com">Nike</a>
			<a href="https://www.pantip.com/" className="sb-shop-item-name">Fiex Experience</a>
			<div className="sb-shop-item-price">Price: $69</div>
		</div>
	</div>
)

export default ShopItem
