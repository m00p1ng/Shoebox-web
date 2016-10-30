import React from 'react'
import { Carousel } from 'react-bootstrap'

export const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  render() {
    return (
      <Carousel interval={3000} pauseOnHover={false} controls={false}>
        <Carousel.Item>
          <img width={1500} height={900} alt="900x500" src="http://www.freetrainer3-0.org.uk/images/nike-sneaker-womens-roshe-run-print-light-magenta-purple-z413_2.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={900} alt="900x500" src="http://static.highsnobiety.com/wp-content/uploads/2015/12/03162839/best-sneaker-featured-960x576.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={900} alt="900x500" src="http://www.hyp-boost.com/images/product/Adidas-Superstar-0623-11_2.jpg"/>
        </Carousel.Item>
      </Carousel>
    );
  }
});
