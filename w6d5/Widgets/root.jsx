import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

const TABS = {
  one: "i am the first",
  two: "i am the two",
  three: "i am the three"
};

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>hello!</h1>
        <Clock />
        <Tabs tabs = {TABS} />
        <Weather />
      </div>
    );
  }



}

export default Root;
