import React from 'react';

class TodoInput extends React.component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  render() {
    return (
      <section>
        <label>Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
        </label>
        <label>Body
          <input
            type="text"
            value={this.state.body}
            />
        </label>
        <button>Submit</button>
      </section>
    );
  }
}

export default TodoInput;
