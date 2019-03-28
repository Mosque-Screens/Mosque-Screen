import React, { Component } from 'react';
import HadithData from '../hadith-data/hadith-data';
import './hadith-of-the-day.css';

export default class HadithOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.hadithData = new HadithData();
    this.state = {
      hadith: this.hadithData.getCurrentDayHadith()
    };
  }
  render() {
    return (
      <div className="HadithOfTheDayWrapper">
        <div className="HadithOfTheDayTitle">
          <h1>Hadith of the day</h1>
        </div>

        <blockquote className="blockquote">
          <p className="Hadith">{this.state.hadith.hadith}</p>
          <footer className="blockquote-footer HadithSource">
            <cite title="Source Title">{this.state.hadith.source}</cite>
          </footer>
        </blockquote>
      </div>
    );
  }
}
