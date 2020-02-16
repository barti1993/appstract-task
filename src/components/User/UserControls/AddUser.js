import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/userActions";

class AddUser extends Component {
  state = {
    name: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    const newUser = {
      name
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, errors } = this.state;

    return (
      <div>
        <h1>Add New User</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <input
              type="submit"
              value="Add New User"
              className="btn btn-dark"
            />
            <Link to={`/`}>
              <button className="btn btn-dark" style={{ marginLeft: "10px" }}>
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addUser })(AddUser);
