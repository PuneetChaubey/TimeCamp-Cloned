import * as types from "./Todoaction.type";
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

export const Todoreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TASK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_TASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: [...state.tasks, payload],
      };
    }
    case types.ADD_TASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
