import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import { Grid } from 'react-bootstrap'

const URL = "/api/product/all"

export default class ProductList extends Component {
  render() {
    var request = axios.post(URL)
    console.log(request)
    return (
      <Grid>
        <h1>Product List by mooping 123</h1>
      </Grid>
    )
  }
}
