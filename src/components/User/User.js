import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/userActions";

class User extends Component {
  onDeleteAction = id => {
    this.props.deleteUser(id);
  };

  render() {
    const { id, name } = this.props.user;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name} </td>
        <td>
          <Link to={`user/edit/${id}`}>Edit</Link>
          <span
            onClick={this.onDeleteAction.bind(this, id)}
            style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
          >
            Delete
          </span>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteUser })(User);
