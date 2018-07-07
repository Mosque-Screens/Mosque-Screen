import React, { Component } from 'react';
import './GoogleSlides.css';
import config from '../config.json';

class GoogleSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        config.googleSlides && config.googleSlides.url
          ? config.googleSlides.url
          : ''
    };
  }

  componentWillMount() {
    document.body.className = 'body_GoogleSlides';
  }

  componentWillUnmount() {
    document.body.className = null;
  }

  render() {
    return (
      <div className="GoogleSlides">
        <iframe
          title="GoogleSlidesIframe"
          src={this.state.url}
          frameBorder="0"
          width="1920px"
          height="1150px"
          allowFullScreen="true"
        />
      </div>
    );
  }
}

export default GoogleSlides;
