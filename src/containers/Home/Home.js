import React, { Component } from 'react'
import { Home } from '../../components'

class HomeContainer extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  render() {
    return (
      <Home />
    )
  }
}

export default HomeContainer
