import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ShopItem = ({product}) => (
  <div className="col l3 m4 s6 card">
    <div className="sb-shop-item center">
  		<div className="sb-hover-zoom">
  			<Link to={`${URL_ROOT}/shop/${product.slug}`}>
  				<img
            src={product.picture}
            alt={product.slug} />
  			</Link>
  			<span className="chip">Nike</span>
  			<Link to={`${URL_ROOT}/shop/${product.slug}`}>
          {product.name}
        </Link>
  			<div className="sb-shop-item-price">
          Price: $ {product.price}
        </div>
  		</div>
    </div>
	</div>
)

const renderShopItem = (products) => {
  return products.map((product) =>
    <ShopItem
      key={product.slug}
      product={product}/>
  )
}

const ShopList = ({products}) => (
	<div className="col l10 m9 s12">
		<div className="card grey lighten-4">
      <div className="row">
        {renderShopItem(products)}
      </div>
    </div>
		<ShopPagination />
  </div>
)

const ShopPagination = () => (
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

const Loading = () => (
  <div className="col l10 m9 s12">
    <div className="container center">
      <h1 className="grey-text text-darken-2">Loading...</h1>
      <div className="progress cyan lighten-3">
        <div className="indeterminate cyan darken-1"></div>
      </div>
    </div>
  </div>
)

const renderShopList = (products, error) => {
  let hasError = error === true
  let hasProducts = products.length > 0

  if(hasError) {
      return (
      <h1>Can't Fetch data</h1>
    )
  } else if(hasProducts) {
    return (
      <ShopList
        products={products}/>
    )
  } else {
    return (
      <Loading />
    )
  }
}

export default renderShopList
