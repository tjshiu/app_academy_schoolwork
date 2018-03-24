import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: ""};
  }

  // location(position) {
  //   let longitude = position.coords.longitude;
  //   let latitude = position.coords.latitude;
  //
  //
  //   var request = new XMLHttpRequest();
  //   request.open('GET', `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=35c49977bb283f64dc9709862988a009`);
  //   // request.onreadystatechange = (() => {console.log("hello");});
  //
  //   request.onreadystatechange = function() {
  //     if (request.status >= 200 && request.status < 400) {
  //       // Success!
  //       var resp = request.responseText.list.weather.main;
  //       this.setState({weather: resp});
  //     } else {
  //       // We reached our target server, but it returned an error
  //
  //     }
  //   };
  //
  //   request.onerror = function() {
  //     // There was a connection error of some sort
  //   };
  //
  //   request.send();
  //
  //
  // }
  //
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //
  //     this.location(position);
  //   }, () => {console.log('error');});
  // }

  render() {
    return(
      <div>
        <p>Weather: cloudy, 60 degrees</p>
      </div>
    );
  }



}



export default Weather;
