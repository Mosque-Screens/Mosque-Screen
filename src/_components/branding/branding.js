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
      clock_background_colour: _appConfig.get('clock_background_colour')
    };
  }

  getCustomCSS() {
    return `
      /* MAIN BRANDING */
      body {
        background: linear-gradient(to right, ${
          this.state.primary_colour
        } 50%, ${this.state.secondary_colour} 50%);
        color: ${this.state.primary_text_colour};
      }
      
      /* CLOCK BRANDING */
      .ClockWrapper {
        background-color: ${this.state.clock_background_colour};
      }
      .Clock { 
        color: ${this.state.primary_colour};
      }

      /* PRIMARY TEXT COLOURS */
      .DateWrapper,
      .NextJamahTime,
      .PrayerTimes,
      .App-header,
      .blackout-clock .ClockWrapper .Clock,
      .PrayerTimesWeekAhead-row {
        color: ${this.state.primary_text_colour}
      }

      /* SECONDARY TEXT COLOURS */
      .PrayerTimesWeekAhead,
      .PrayerTimesWeekAhead td:first-child {
        color: ${this.state.secondary_text_colour}
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
