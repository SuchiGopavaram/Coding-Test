import React, { Component } from 'react';
import { render } from 'react-dom';
import Timer from './Timer';
class App extends Component {
  constructor() {
    super();
    this.formatTime = this.formatTime.bind(this);
  }
  formatTime(days,hours,minutes,seconds,ms){
    return (days + "d " + hours + "hr "
          + minutes + "min " + seconds + "s " + ms + "ms ")
  }
  render() {
    return (
      <div>
        <Timer formatTime={this.formatTime}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
