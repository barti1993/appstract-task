import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  GET_USER,
  UPDATE_USER
} from "../actions/actionTypes";

const initialState = {
  users: [],
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? (user = action.payload) : user
        )
      };
    default:
      return state;
  }
}
