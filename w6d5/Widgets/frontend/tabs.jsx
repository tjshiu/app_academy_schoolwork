import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};//props[one]
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let tabName = event.currentTarget.innerText;
    if (tabName === "one") {
      this.setState({selected: 0});
    } else if (tabName === "two") {
      this.setState({selected: 1});
    } else {
      this.setState({selected: 2});
    }
  }

  render() {
    let tabs = Object.keys(this.props.tabs);

    return(
      <div>

        {tabs.map( tab => {
          return <button onClick={this.handleClick}>{tab}</button>;
        })}

        <p>{this.props.tabs[tabs[this.state.selected]] }</p>
      </div>
    );
  }
}

export default Tabs;
