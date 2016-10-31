import React from 'react'

export const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

/*  handleSelect(selectedIndex, e) {
    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }, */

  render() {
    return (
      <div className="carousel carousel-slider" data-indicators="true">
        <div className="carousel-fixed-item">
        </div>
      <a className="carousel-item" href="#one!"><img src="static/images/feature/01.png"/></a>
      <a className="carousel-item" href="#two!"><img src="static/images/feature/02.png"/></a>
      <a className="carousel-item" href="#three!"><img src="static/images/feature/03.png"/></a>
      <a className="carousel-item" href="#tfour!"><img src="static/images/feature/04.png"/></a>
    </div>
    );
  }
});
