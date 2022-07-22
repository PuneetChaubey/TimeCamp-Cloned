import * as types from "./taskType";
import axios from "axios";

export const deleteSubTask = (id, payload) => (dispatch) => {
  // her epayload is whole subtask array
  dispatch({ type: types.DELETE_TASK_REQUEST });

  return axios
    .patch(`http://localhost:5000/tasks/${id}`, payload)
    .then((response) => {
      dispatch({ type: types.DELETE_TASK_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: types.DELETE_TASK_FAILURE, payload: error });
    });
};

export const addTask = (data) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });

  return axios
    .post("http://localhost:8080/tasks", data)
    .then((response) => {
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: response.data });
      return types.ADD_TASK_SUCCESS;
    })
    .catch((error) => {
      dispatch({ type: types.ADD_TASK_FAILURE, payload: error });
    });
};
