import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as Types from "./actionType";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.REGISTER_SUCCESS:
      saveLocalData("token", payload);
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case Types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
