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

const ProductTable = ({products}) => (
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
        <th data-field="avaliable">Avaiable</th>
      </tr>
    </thead>

    <tbody>
      {renderProducts(products)}
    </tbody>
  </table>
)

const renderTable = (products) => {
  if(products.length > 0) {
    return <ProductTable products={products} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

const ManProductList = ({products}) => (
  <div className="col l10 s12 card">
    <h3>All Products</h3>
    <Link to={`${URL_ROOT}/manage/product/new`}>
      <button className="waves-effect waves-light btn">
        <i className="material-icons left white-text">add</i>
        add product
      </button>
    </Link>
    {renderTable(products)}
  </div>
)

export default ManProductList
