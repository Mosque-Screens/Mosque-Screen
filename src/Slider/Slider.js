import React, { Component } from 'react';
import './Slider.css';
import View1 from '../View 1/View1';
import View2 from '../View 2/View2';
import View3 from '../View 3/View3';
import View4 from '../View 4/View4';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: <View1 />,
      slides: [<View1 />, <View2 />, <View3 />, <View4 />],
      currentPosition: 0
    };
  }

  next() {
    var newSlidePosition = this.state.currentPosition + 1;
    if (newSlidePosition >= this.state.slides.length) newSlidePosition = 0;
    this.setState(() => ({
      currentSlide: this.state.slides[newSlidePosition],
      currentPosition: newSlidePosition
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.next(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.state.currentSlide;
  }
}

export default Slider;
