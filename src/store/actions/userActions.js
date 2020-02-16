import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  GET_USER,
  UPDATE_USER
} from "./actionTypes";
import axios from "../../axios-users";

export const getUsers = () => async dispatch => {
  const res = await axios.get("/users");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getUser = id => async dispatch => {
  const res = await axios.get(`/users/${id}`);
  dispatch({
    type: GET_USER,
    payload: res.data
  });
};

export const deleteUser = id => async dispatch => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  }
  await axios.delete(`/users/${id}`);
  dispatch({
    type: DELETE_USER,
    payload: id
  });
};

export const addUser = user => async dispatch => {
  const res = await axios.post("/users", user);
  dispatch({
    type: ADD_USER,
    payload: res.data
  });
};

export const updateUser = user => async dispatch => {
  const res = await axios.put(`/users/${user.id}`, user);
  dispatch({
    type: UPDATE_USER,
    payload: res.data
  });
};
