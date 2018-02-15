import React, { Component } from 'react';
import moment from 'moment';
import './clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        var time = moment().format('h:mm A');
        this.setState(() => ({
            time: time
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
