import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const PageItem = ({page, handlePage, activePage}) => (
  <li
    className={(page === activePage) ?
      "waves-effect active": "waves-effect"}>
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

const Pagination = ({handlePage, activePage, totalPage}) => (
  <div className="row center sbox-shop-pagination">
    <ul className="pagination">
      <li className={(activePage === 1) ? "disabled" : ""}>
        {
          (activePage === 1) ? (
            <a><i className="material-icons">chevron_left</i></a>
          ) : (
            <Link onClick={() => handlePage(activePage-1)}>
              <i className="material-icons"
                style={{cursor: 'pointer'}}>chevron_left</i>
            </Link>
          )
        }
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
      <li className={(activePage === totalPage) ? "disabled" : ""}>
        {
          (activePage === totalPage) ? (
            <a><i className="material-icons">chevron_right</i></a>
          ) : (
            <Link onClick={() => handlePage(activePage+1)}>
              <i className="material-icons"
                style={{cursor: 'pointer'}}>chevron_right</i>
            </Link>
          )
        }
      </li>
    </ul>
  </div>
)

export default Pagination
