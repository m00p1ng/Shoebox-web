import React from 'react'

const ManProductForm = () => (
				<div className="col l10 card">

					<div className="row">
						<div className="col l6 offset-l3 sb-product-edit center">
							<img src="https://ae01.alicdn.com/kf/HTB1hlyDMVXXXXa7XXXXq6xXFXXXo/Men-font-b-Shoes-b-font-Outdoor-Climbing-Mountain-2016-Large-Size-Sneaker-font-b-Leather.jpg" alt="img01" />
						</div>
					</div>

					<div className="row">
						<div className="col l10 offset-l1">
							<form className="input-field form-style-6" action="#eiei">
								<table id="sb-product-edit-table" className="striped sb-manage-table-in-card responsive-table">
									<thead>
										<tr>
											<th data-field="id">FIELD</th>
											<th data-field="brand">DATA</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>ID</td>
											<td>1</td>
										</tr>
										<tr>
											<td>Sold</td>
											<td>7</td>
										</tr>
										<tr>
											<td>View</td>
											<td>42</td>
										</tr>
										<tr>
											<td>Brand</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="brand" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="name" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Brand</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="brand" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Supplier</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="supplier" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Type</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="type" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Description</td>
											<td>
												<div className="sb-product-edit-input">
													<textarea name="description" rows="3"></textarea>
												</div>
											</td>
										</tr>
										<tr>
											<td>Price</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="price" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Picture</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="picture" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Color</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="color" />
												</div>
											</td>
										</tr>
										<tr>
											<td>is_available ?</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="is_availabue" />
												</div>
											</td>
										</tr>
										<tr>
											<td>is_discount</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="is_discount" />
												</div>
											</td>
										</tr>
										<tr>
											<td>Discount percent</td>
											<td>
												<div className="sb-product-edit-input">
													<input type="text" name="discount" />
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="right">
									<a className="waves-effect waves-light btn grey">Cancel</a>
									<input className="waves-effect waves-light btn orange darken-3" type="submit" />
								</div>
							</form>
						</div>
					</div>
				</div>
)

export default ManProductForm
