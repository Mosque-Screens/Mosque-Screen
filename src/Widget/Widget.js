import React, { Component } from 'react';
import './Widget.css';
import PrayerTimes from '../_components/prayer-times/prayer-times';

class Widget extends Component {
  render() {
    return (
      <div className="WidgetWrapper">
        <PrayerTimes />
      </div>
    );
  }
}

export default Widget;
