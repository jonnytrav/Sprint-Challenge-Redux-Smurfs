import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.addSmurf}>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            placeholder="Name..."
          />
          <input
            name="age"
            onChange={this.handleChange}
            type="number"
            placeholder="Age..."
          />
          <input
            name="height"
            onChange={this.handleChange}
            type="number"
            placeholder="height"
          />
          <button>Add to Village!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
