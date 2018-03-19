class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    // while (true){
    let currentDate = new Date(Date.now());
    this.hours = currentDate.getHours();
    this.minutes = currentDate.getMinutes();
    this.seconds = currentDate.getSeconds();
    // console.log(this);
    // this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let timeArr = [this.hours, this.minutes, this.seconds];

    for (let i=0; i < timeArr.length; i++) {
      if (timeArr[i] < 10) {
        timeArr[i] = "0" + timeArr[i];
      }
    }
    console.log(timeArr.join(':'));
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // console.log(this);
    this.printTime();
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }
}

// const clock = new Clock();
