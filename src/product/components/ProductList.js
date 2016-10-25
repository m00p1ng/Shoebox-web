import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'react-bootstrap'

const URL = "/api/product/all"

export default class ProductList extends Component {
  render() {
    axios.get(URL).then(function(response){
      console.log(response.data)
    })
    return (
      <Grid>
        <h1>Product List by mooping eiei</h1>
      </Grid>
    )
  }
}
