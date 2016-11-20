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
          Edit
        </Link>
      </td>
    </tr>
  )
}

const renderProducts = (products) => {
  let id = 1
  return products.map(product =>
    <ProductRow
      key={product.slug}
      id={id++}
      product={product} />
  )
}

const ManProductList = ({products}) => (
  <div className="col l10 s12 card">
    <h4>All Products</h4>
    <Link to={`${URL_ROOT}/manage/product/new`}>
      <button className="waves-effect waves-light btn">
        <i className="material-icons left white-text">add</i>
        add product
      </button>
    </Link>
    <table
      className="highlight sb-manage-table-in-card
        responsive-table striped">
      <thead>
        <tr>
          <th data-field="id">ID</th>
          <th data-field="brand">Brand</th>
          <th data-field="name">Name</th>
          <th data-field="price">Price</th>
          <th data-field="amount">Amount</th>
          <th data-field="sold_unit">Sold</th>
          <th data-field="avaliable">Avaiable</th>
        </tr>
      </thead>

      <tbody>
        {renderProducts(products)}
      </tbody>
    </table>
  </div>
)

export default ManProductList
