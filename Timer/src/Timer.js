import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Timer extends Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDate = new Date().getTime();
    
    this.state = {
      time: '',
      timer: ''
    };

  }
 
  startTimer() {
    this.countDate = new Date().getTime();
    this.setState({ timer: '' })
    this.intervalFunc = setInterval(() => {
      let curr = new Date().getTime();
      let diff = this.countDate - curr;
      let days = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24))) - 1;
      let hours = Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) - 1;
      let minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))) - 1;
      let seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));
      let ms = Math.floor(Math.abs(((diff % (1000 * 60)) / 1000) % 1) * 1000);


      this.setState({
        timer: this.props.formatTime(days,hours,minutes,seconds,ms)
      });
    }, 10
    )
  }

  stopTimer() {
    clearTimeout(this.intervalFunc);
  }

  componentWillMount() {

    setInterval(() => {
      let d = new Date();
      this.setState({ time: (d.getHours() + "hr :" + d.getMinutes() + "min :" + d.getSeconds()+"s :"+d.getMilliseconds() + "ms") })
    }, 10)
  }

  render() {
    return (
      <div>

        <h3>
          Current Time : {this.state.time}
        </h3>
        <button onClick={this.startTimer}>Start Timer</button>

        <h3>
          Count Down Timer : {this.state.timer}
        </h3>
        <button onClick={this.stopTimer}>Stop Timer</button>
       

      </div>
    );
  }
}
