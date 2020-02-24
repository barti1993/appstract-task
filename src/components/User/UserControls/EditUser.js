import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../../store/actions/userActions";

const EditUser = props => {
  const [data, setData] = useState({
    name: "",
    errors: {}
  });

  const { getUser } = props;
  useEffect(() => {
    const { id } = props.match.params;
    getUser(id);
  }, [getUser]);

  const onSubmit = e => {
    e.preventDefault();

    const { name } = data;

    if (name === "" || name === undefined) {
      setData({ errors: { name: "Name is required" } });
      return;
    }

    const { id } = props.match.params;

    const upatedUser = {
      id,
      name
    };

    props.updateUser(upatedUser);

    setData({
      name: "",
      errors: {}
    });

    props.history.push("/");
  };

  const onChange = e => setData({ [e.target.name]: e.target.value });

  const { name, errors } = props;

  return (
    <div>
      <h1>Edit User</h1>
      <div>
        <form onSubmit={onSubmit}>
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={onChange}
            error={errors}
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
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, { getUser, updateUser })(EditUser);
