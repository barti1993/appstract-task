import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/userActions";

const User = props => {
  const onDeleteAction = id => {
    props.deleteUser(id);
  };

  const { id, name } = props.user;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name} </td>
      <td>
        <Link to={`user/edit/${id}`}>Edit</Link>
        <span
          onClick={onDeleteAction.bind(this, id)}
          style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
        >
          Delete
        </span>
      </td>
    </tr>
  );
};

export default connect(null, { deleteUser })(User);
