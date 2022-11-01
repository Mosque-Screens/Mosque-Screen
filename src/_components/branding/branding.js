import React, { Component } from 'react';
import AppConfig from '../app-config/app-config';

class Branding extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    this.state = {
      primary_colour: _appConfig.get('primary_colour'),
      secondary_colour: _appConfig.get('secondary_colour'),
      primary_text_colour: _appConfig.get('primary_text_colour'),
      secondary_text_colour: _appConfig.get('secondary_text_colour'),
      prayer_time_highlight_colour: _appConfig.get(
        'prayer_time_highlight_colour'
      ),
      clock_background_colour: _appConfig.get('clock_background_colour'),
      slider_mode: _appConfig.get('sliderMode')
    };
  }

  getCustomCSS() {
    var background_percentage = {
      left: this.state.slider_mode === 'single-view' ? 30 : 50,
      right: this.state.slider_mode === 'single-view' ? 30 : 50
    };

    return `
      /* MAIN BRANDING */
      body {
        background: linear-gradient(to right, ${this.state.primary_colour} ${background_percentage.right}%, ${this.state.secondary_colour} ${background_percentage.left}%);
        color: ${this.state.primary_text_colour};
      }

      @media only screen and (max-width: 992px) {
        body {
          background: linear-gradient(to right, ${this.state.primary_colour} 50%, ${this.state.primary_colour} 50%);
        }
      }

      /* CLOCK BRANDING */
      .ClockWrapper {
        background-color: ${this.state.clock_background_colour};
      }
      .Clock {
        color: ${this.state.primary_colour};
      }

      /* PRIMARY TEXT COLOURS */
      .NextJammahTime,
      .PrayerTimes,
      .App-header,
      .blackout-clock .ClockWrapper .Clock,
      .PrayerTimesSingleView th,
      .PrayerTimesSingleView td,
      .PrayerTimesWeekAhead-row {
        color: ${this.state.primary_text_colour};
      }

      @media only screen and (max-width: 600px) {
        .NextJammahTime,
        .PrayerTimesSingleView .nextJammahHighlight,
        .PrayerTimesSingleView th,
        .PrayerTimesSingleView td {
          color: ${this.state.secondary_text_colour};
        }
      }

      /* SECONDARY TEXT COLOURS */
      .DateWrapper,
      .SingleView .AdditionalMessageWrapper,
      .PrayerTimesWeekAhead,
      .PrayerTimesWeekAhead td:first-child {
        color: ${this.state.secondary_text_colour};
      }

      /* HADITH OF THE DAY */
      .HadithOfTheDayWrapper {
        color: ${this.state.primary_colour};
      }

      /* SINGLE VIEW PRAYER TIMES */
      .PrayerTimesSingleView .nextJammahHighlight {
        color: ${this.state.prayer_time_highlight_colour};
      }
    `;
  }

  render() {
    return (
      <div className="Branding">
        <style>{this.getCustomCSS()}</style>
      </div>
    );
  }
}

export default Branding;
