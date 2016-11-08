import React, { Component } from 'react'
import { Home } from '../../components'

class HomeContainer extends Component {
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({full_width: true,
                       time_constant: 200});
    window.setInterval(function(){$('.carousel').carousel('next')},5000)
  }

  render() {
    return (
      <Home />
    )
  }
}

export default HomeContainer
