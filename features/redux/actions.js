import { ADD_TODO, DELETE_TODO } from "./actionTypes";

let nextUserId = 0;

export const addUser = data => ({
  type: ADD_TODO,
  payload: {
    id: ++nextUserId,
    data
  }
});

export const deleteUser = id => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});


