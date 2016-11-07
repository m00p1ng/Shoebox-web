import React, { Component } from 'react'
import Carousel from './Carousel'
import { ProductListApp } from '../../containers'
import '../../../static/js/jquery-2.1.1.min.js'

class Home extends Component {
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({full_width: true,
                       time_constant: 200});
    window.setInterval(function(){$('.carousel').carousel('next')},5000)
  }

  render() {
    return (
      <div>
        <Carousel />
        <ProductListApp title="New Arrival"/>
      </div>
    )
  }
}

export default Home
