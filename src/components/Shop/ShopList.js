import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'
import { Loading, ErrorMsg } from './Message'
import ShopPagination from './ShopPagination'

const ShopItem = ({product}) => (
	<div className="col l3 m4 s6 sb-shop-item">
			<div>
			<Link to={`${URL_ROOT}/shop/${product.slug}`}>
				<img
					src={product.picture}
					alt={product.slug} />
			</Link>
			</div>
			<div className="sb-shop-text-section" >
				<span className="sb-bold black-text sb-shop-small-text">
					{product.brand}
				</span>
				<br />
					<Link to={`${URL_ROOT}/shop/${product.slug}`}>
						<span className="sb-shop-small-text black-text">
							{product.name}
						</span>
					</Link>
				<br />
				<div className="sb-shop-price-box">
					<span className="sb-shop-small-text sb-bold sb-shop-price-text">
						$ {product.price}
					</span>
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

const ShopList = ({
	children,
	totalPage,
	handlePage,
	activePage
}) => (
	<div className="col l10 s12 card white">
		<div className="sb-shop-list">
      <div className="row">
        {children}
      </div>
    </div>
		<ShopPagination
			totalPage={totalPage}
			activePage={activePage}
			handlePage={handlePage}/>
  </div>
)

const renderShopList = (props) => {
	const {products, error, totalPage, handlePage, activePage} = props
  const hasError = error === true
  const hasProducts = products.length > 0

  if(hasError) {
    return (
    	<ErrorMsg />
    )
  } else if(hasProducts) {
    return (
			<div>
	      <ShopList
					totalPage={totalPage}
					activePage={activePage}
					handlePage={handlePage}>
	        {renderShopItem(products)}
	      </ShopList>
			</div>
    )
  } else {
    return (
      <Loading />
    )
  }
}

export default renderShopList
