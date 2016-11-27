import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ProductRow = ({product, id}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{product.brand}</td>
      <td>{product.name}</td>
      <td>$ {product.price}</td>
      <td>{product.amount}</td>
      <td>{product.sold_unit}</td>
      <td>{(product.is_available) ? "Yes" : "No"}</td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/product/edit`}>
          More
        </Link>
      </td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/product/edit`}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

const renderProducts = (products, activePage) => {
  let id = 1+(20*(activePage-1))
  return products.map(product =>
    <ProductRow
      key={product.slug}
      id={id++}
      product={product} />
  )
}

const ProductTable = ({products, activePage}) => (
  <table
    className="sb-manage-table-in-card responsive-table striped">
    <thead>
      <tr>
        <th data-field="id">#</th>
        <th data-field="brand">Brand</th>
        <th data-field="name">Name</th>
        <th data-field="price">Price</th>
        <th data-field="amount">Amount</th>
        <th data-field="sold_unit">Sold</th>
        <th data-field="avaliable">Avaliable</th>
      </tr>
    </thead>

    <tbody>
      {renderProducts(products, activePage)}
    </tbody>
  </table>
)

const renderTable = (products, activePage) => {
  if(products.length > 0) {
    return <ProductTable
      activePage={activePage}
      products={products} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

export default renderTable
