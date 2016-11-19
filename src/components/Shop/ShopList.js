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

const renderShopItem = ({products}) => {
  let row = products.length;
}

const ShopList = ({products}) => (
	<div className="col l9 s12">
		<div className="card white">
      <div className="row">
	      <ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
      </div>
      <div className="divider grey lighten-3"></div>
    </div>
		<ShopPage />
  </div>
)

export default ShopList

const ShopPage = () => (
	<div className="row center" style={{marginTop: "30px"}}>
		<ul className="pagination">
			<li className="disabled">
        <a href="#!"><i className="material-icons">
          chevron_left
        </i>
      </a>
    </li>
			<li className="active">
        <a href="#!">1</a>
      </li>
			<li className="waves-effect">
        <a href="#!">2</a>
      </li>
			<li className="waves-effect">
        <a href="#!">
          <i className="material-icons">
            chevron_right
          </i>
        </a>
      </li>
		</ul>
	</div>
)
