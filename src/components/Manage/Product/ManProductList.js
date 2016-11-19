import React from 'react'

const ManProductList = () => (
  <div className="col l10 s12 card">
    <h4>All Products</h4>
    <table className="highlight sb-manage-table-in-card responsive-table">
      <thead>
        <tr>
          <th data-field="slug">Slug</th>
          <th data-field="brand">Brand</th>
          <th data-field="name">Item Name</th>
          <th data-field="price">Item Price</th>
          <th data-field="is_available">is_avaiable</th>
          <th data-field="amount">Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr data-href="#1">
          <td>nike-fiex-experience</td>
          <td>Nike</td>
          <td>Fiex Experience</td>
          <td>$69.00</td>
          <td>true</td>
          <td>20</td>
        </tr>
        <tr data-href="#2">
          <td>nike-air-max</td>
          <td>Nike</td>
          <td>Air Max</td>
          <td>$69.00</td>
          <td>true</td>
          <td>5</td>
        </tr>
        <tr data-href="#3">
          <td>nike-tanjun</td>
          <td>Nike</td>
          <td>Tanjun</td>
          <td>$69.00</td>
          <td>true</td>
          <td>50</td>
        </tr>
        <tr data-href="#4">
          <td>converse-marble-white</td>
          <td>Converse</td>
          <td>Mable White</td>
          <td>$79.00</td>
          <td>true</td>
          <td>20</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default ManProductList
