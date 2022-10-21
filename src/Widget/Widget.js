import React, { Component } from 'react';
import './Widget.css';
import PrayerTimesWidget from '../_components/prayer-times-widget/prayer-times-widget';

class Widget extends Component {
  render() {
    return (
      <div className="WidgetWrapper">
        <PrayerTimesWidget />
      </div>
    );
  }
}

export default Widget;
