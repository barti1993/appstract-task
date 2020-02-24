import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import User from "../../components/User/User";
import { getUsers } from "../../store/actions/userActions";

const Users = props => {
  const { getUsers } = props;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { users } = props;
  return (
    <div>
      <h1>Users Table</h1>
      <div className="table-responsive-md">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/user/add" className="nav-link">
        <button className="btn btn-dark">Add New User</button>
      </Link>
    </div>
  );
};

const mapStateToprops = state => ({
  users: state.user.users
});

export default connect(mapStateToprops, { getUsers })(Users);
