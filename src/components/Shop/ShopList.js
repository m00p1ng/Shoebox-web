import React from 'react'
import { Link, browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

const PageItem = ({page, handlePage, activePage}) => (
		<li
			className={(page === activePage)? "waves-effect active": "waves-effect"}>
			<Link onClick={() => handlePage(page)}>{page}</Link>
		</li>
)

const initRow = (totalPage) => {
	let row = []
	for(let i = 1; i <= totalPage; i++) {
		row.push(i)
	}
	return row
}

const ShopPagination = ({row, handlePage, activePage}) => (
	<div className="row center sbox-shop-pagination">
		<ul className="pagination">
			<li className="disabled">
        <a href="#!">
					<i className="material-icons">chevron_left</i>
	      </a>
	    </li>
			{
				row.map((page) => (
					<PageItem
						key={page}
						page={page}
						handlePage={handlePage}
						activePage={activePage}/>
				))
			}
			<li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
		</ul>
	</div>
)

const ShopItem = ({product}) => (
  // <div className="col l3 m4 s6">
  //   <div className="sb-shop-item center">
  // 		<div className="sb-hover-zoom">
  // 			<Link to={`${URL_ROOT}/shop/${product.slug}`}>
  // 				<img
  //           src={product.picture}
  //           alt={product.slug} />
  // 			</Link>
  // 			<span className="chip">{product.brand}</span>
  // 			<Link to={`${URL_ROOT}/shop/${product.slug}`}>
  //         {product.name}
  //       </Link>
  // 			<div className="sb-shop-item-price">
  //         Price: $ {product.price}
  //       </div>
  // 		</div>
  //   </div>
	// </div>

	<div className="col l3 m4 s6 sb-shop-item">
			<div>
				<img src={product.picture} alt={product.slug} />
			</div>
			<div className="sb-shop-text-section" >
				<span className="sb-bold black-text sb-shop-small-text">{product.brand}</span>
				<br />
				<span className="sb-shop-small-text">{product.name}</span>
				<br />
				<div className="sb-shop-price-box">
					<span className="sb-shop-small-text sb-shop-price-text">$ {product.price}</span>
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
	<div className="col l10 s12">
		<div className="card white">
      <div className="row">
        {children}
      </div>
    </div>
		<ShopPagination
			row={initRow(totalPage)}
			activePage={activePage}
			handlePage={handlePage}/>
  </div>
)

const Loading = () => (
  <div className="col l10 s12">
    <div className="container center">
      <h1 className="grey-text text-darken-2">Loading...</h1>
      <div className="progress cyan lighten-3">
        <div className="indeterminate cyan darken-1"></div>
      </div>
    </div>
  </div>
)

const ErrorMsg = () => (
	<div className="col l10 s12">
		<div className="container center">
			<h1 className="grey-text text-darken-2">Can't Fetch data</h1>
		</div>
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
