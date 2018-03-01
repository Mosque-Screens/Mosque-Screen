import React, {Component} from 'react';
import moment from 'moment-hijri';
import './date.css';

class Date extends Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            date: this.getDate(),
            dayOfWeek: this.getDayOfTheWeek(),
            hijriDate: this.getHijriDate()
        };
    }

    getDate() {
        return moment().format('MMMM Do YYYY');
    }

    getDayOfTheWeek() {
        return moment().format('dddd');
    }

    getHijriDate() {
        return moment().format('iD iMMMM iYYYY');
    }

    render() {
        return (
            <div className="DateWrapper">
                <div className="Date">
                    {this.state.dayOfWeek}
                    {this.state.date}
                    {this.state.hijriDate}
                </div>
            </div>
        );
    }
}

export default Date;