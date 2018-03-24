import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let newDate = new Date();


    this.tick = this.tick.bind(this);


    this.state = {date: newDate};
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    let newDate = new Date();
    this.setState( {date: newDate} );
  }

  render() {
    let second = this.state.date.getSeconds();
    let minute = this.state.date.getMinutes();
    let hour = this.state.date.getHours();

    if (second < 10) {
      second = `0${second}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }

    let time = `${hour}:${minute}:${second}`;
    return (
      <div>
        <h1>{time}</h1>
      </div>
  );
  }

}

export default Clock;
