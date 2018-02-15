import React, { Component } from 'react';
import moment from 'moment';
import './clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: this.getTime() };
    }

    getTime() {
        return moment().format('h:mm A');
    }

    tick() {
        this.setState(() => ({
            time: this.getTime()
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Clock">
                {this.state.time}
            </div>
        );
    }
}

export default Clock;
