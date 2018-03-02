import React, { Component } from 'react';
import './Slider.css';
import View1 from '../View 1/View1';
import View2 from '../View 2/View2';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: <View1 />,
      slides: [<View1 />, <View2 />]
    };
  }

  getNextSlide() {
    return <View2 />;
  }

  next() {
    this.setState(() => ({
      currentSlide: this.getNextSlide()
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.next(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.state.currentSlide;
  }
}

export default Slider;
