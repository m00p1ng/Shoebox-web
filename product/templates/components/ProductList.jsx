import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

const URL = "http://localhost:8000/api/product/name/eiei/"

export default class ProductList extends Component {
  render() {
    var request = axios.get(URL)
    console.log(request)
    return (
      <div>
        <h1>Product List by mooping 123</h1>
      </div>
    )
  }
}
