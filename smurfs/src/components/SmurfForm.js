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
    // console.log(this.state.name);
  };

  submitSmurfForm = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitSmurfForm}>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            placeholder="Name..."
            value={this.state.name}
          />
          <input
            name="age"
            onChange={this.handleChange}
            type="number"
            placeholder="Age..."
            value={this.state.age}
          />
          <input
            name="height"
            onChange={this.handleChange}
            type="number"
            placeholder="height"
            value={this.state.height}
          />
          <button onClick={this.submitSmurfForm}>Add to Village!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
