import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/userActions";

const AddUser = props => {
  const [data, setData] = useState({
    name: "",
    errors: {}
  });

  const onSubmit = e => {
    e.preventDefault();
    const { name } = data;

    if (name === "" || name === undefined) {
      setData({ errors: { name: "Name is required" } });
      return;
    }
    const newUser = {
      name
    };
    props.addUser(newUser);
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
      <h1>Add New User</h1>
      <div>
        <form onSubmit={onSubmit}>
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter Name..."
            value={name}
            onChange={onChange}
            error={errors}
          />
          <input type="submit" value="Add New User" className="btn btn-dark" />
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

export default connect(null, { addUser })(AddUser);
