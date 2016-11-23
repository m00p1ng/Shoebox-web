import React from 'react'
import { Link } from 'react-router'
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

const ShopPagination = ({handlePage, activePage, totalPage}) => (
  <div className="row center sbox-shop-pagination">
    <ul className="pagination">
      <li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {
        initRow(totalPage).map((page) => (
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

export default ShopPagination
