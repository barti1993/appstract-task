import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../../store/actions/userActions";

class EditUser extends Component {
  state = {
    name: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name } = nextProps.user;
    this.setState({
      name
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }

  onSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    const { id } = this.props.match.params;

    const upatedUser = {
      id,
      name
    };

    this.props.updateUser(upatedUser);

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
        <h1>Edit User</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />

            <input type="submit" value="Update" className="btn btn-dark" />
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

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, { getUser, updateUser })(EditUser);
