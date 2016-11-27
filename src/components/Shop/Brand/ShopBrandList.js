import React from 'react'
import { Loading, ErrorMsg } from '../Message'
import Pagination from '../../App/Pagination'
import { renderShopItem } from '../ShopList'

const ShopBrandList = ({
  children,
  totalPage,
  totalProduct,
  handlePage,
  activePage
}) => (
  <div className="col l10 s12 card white">
    <div className="sb-shop-list">
      <div className="row">
        <h5 className="grey-text text-darken-1">
          {24*(activePage-1)+1}
          {' '}-{' '}
          {(activePage*24 > totalProduct)? (totalProduct): (activePage*24)}
          {' '}from {totalProduct}
        </h5>
        <div className="divider grey lighten-4"></div>
        {children}
      </div>
    </div>
    <Pagination
      totalPage={totalPage}
      activePage={activePage}
      handlePage={handlePage}/>
  </div>
)

const renderShopBrandList = (props) => {
  const {
    products,
    error,
    totalPage,
    totalProduct,
    handlePage,
    activePage
  } = props
  const hasError = error === true
  const hasProducts = products.length > 0

  if(hasError) {
    return (
      <ErrorMsg />
    )
  } else if(hasProducts) {
    return (
      <ShopBrandList
        totalPage={totalPage}
        totalProduct={totalProduct}
        activePage={activePage}
        handlePage={handlePage}>
        {renderShopItem(products)}
      </ShopBrandList>
    )
  } else {
    return (
      <Loading />
    )
  }
}

export default renderShopBrandList
