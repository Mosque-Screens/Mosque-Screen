import React, { Component } from 'react';
import './Slider.css';
import View1 from '../View 1/View1';
import View2 from '../View 2/View2';
import View3 from '../View 3/View3';
import View4 from '../View 4/View4';
import GoogleSlides from '../GoogleSlides/GoogleSlides';
import config from '../config.json';
import BlackoutPeriods from '../_components/blackout-periods/blackout-periods';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: this.getInitialSlide(),
      slides: this.getSlides(),
      currentPosition: 0,
      sliderMode: config.sliderMode || 'slider',
      slideTimeout: config.slideTimeout,
      googleSlides: {
        slide: <GoogleSlides />,
        totalCount:
          config.googleSlides && config.googleSlides.numberOfSlides
            ? config.googleSlides.numberOfSlides
            : 0
      }
    };
  }

  getInitialSlide() {
    return <View1 />;
  }

  getSlides() {
    return [<View1 />, <View2 />, <View3 />, <View4 />];
  }

  next() {
    var blackoutPeriods = new BlackoutPeriods();
    if (blackoutPeriods.checkIfBlackoutPeriod()) {
      this.setState(() => ({
        currentSlide: blackoutPeriods.state.blackOutSlide,
        currentPosition: 0
      }));
    } else {
      this.nextSlide();
    }
  }

  nextSlide() {
    var newSlidePosition = this.state.currentPosition + 1;
    var isLastSlide = newSlidePosition >= this.state.slides.length;

    if (isLastSlide) {
      newSlidePosition = 0;
    }

    this.setState(() => ({
      currentSlide: this.state.slides[newSlidePosition],
      currentPosition: newSlidePosition
    }));
  }

  showGoogleSlides() {
    this.setState(() => ({
      currentSlide: this.state.googleSlides.slide
    }));
    this.stopInterval();
    var slideCount = 0;
    var _gSlideInterval = setInterval(() => {
      slideCount++;
      if (slideCount >= this.state.googleSlides.totalCount - 1) {
        clearInterval(_gSlideInterval);
        this.startInterval();
      }
    }, this.state.slideTimeout);
  }

  startInterval() {
    this.interval = setInterval(() => this.next(), this.state.slideTimeout);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    if (this.state.sliderMode === 'slider') {
      this.startInterval();
    }
  }

  componentWillUnmount() {
    if (this.state.sliderMode === 'slider') {
      this.stopInterval();
    }
  }

  render() {
    return this.state.currentSlide;
  }
}

export default Slider;
