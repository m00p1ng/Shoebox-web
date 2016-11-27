import React from 'react'
import { reduxForm, Field } from 'redux-form'

const ProductRenderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <tr>
    <td>{label}</td>
    <td>
      <div className="sb-product-edit-input">
        <input type={type} {...input} />
      </div>
    </td>
  </tr>
)

const ManProductForm = (props) => {
  const { handleSubmit, submitting, invalid } = props
  return (
    <div className="row" style={{marginTop: '20px'}}>
      <div className="col l10 offset-l1">
        <form className="input-field form-style-6">
          <table
            id="sb-product-edit-table"
            className="striped sb-manage-table-in-card responsive-table">
            <thead>
              <tr>
                <th data-field="id">FIELD</th>
                <th data-field="brand">DATA</th>
              </tr>
            </thead>

            <tbody>
              <Field
                name="brand"
                component={ProductRenderField}
                type="text"
                label="Brand" />

              <Field
                name="name"
                component={ProductRenderField}
                type="text"
                label="Name" />

              <Field
                name="price"
                component={ProductRenderField}
                type="text"
                label="Price" />

              <Field
                name="amount"
                component={ProductRenderField}
                type="text"
                label="Amount" />

              <Field
                name="types"
                component={ProductRenderField}
                type="text"
                label="Type" />

              <Field
                name="date"
                component={ProductRenderField}
                type="text"
                label="Date" />

              <Field
                name="picture"
                component={ProductRenderField}
                type="text"
                label="Picture" />

              <Field
                name="color"
                component={ProductRenderField}
                type="text"
                label="Color" />

              <tr>
                <td>Description</td>
                <td>
                  <div className="sb-product-edit-input">
                    <Field
                      name="description"
                      component="textarea"
                      type="textarea" />
                  </div>
                </td>
              </tr>

              <Field
                name="supplier"
                component={ProductRenderField}
                type="text"
                label="Supplier" />

              <tr>
                <td>Avaliable</td>
                <td>
                  <Field
                    name="is_available"
                    component="input"
                    type="checkbox" />
                </td>
              </tr>

              <tr>
                <td>Discount</td>
                <td>
                  <Field
                    name="is_discount"
                    component="input"
                    type="checkbox" />
                </td>
              </tr>

              <Field
                name="discountPercent"
                component={ProductRenderField}
                type="text"
                label="Discount percent" />

            </tbody>
          </table>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="right">
              <button
                className="waves-effect waves-light btn grey">
                Cancel
              </button>
              {' '}
              <button
                className="waves-effect waves-light btn orange darken-3"
                type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: "product"
})(ManProductForm)
