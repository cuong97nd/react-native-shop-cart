import { GET_USER, UNAUTHORIZED, LOGOUT } from "./types";
import axios from "axios";

export const getUser = token => async dispatch => {
  try {
    const res = await axios("https://severok-1.cuonhbui.repl.co/api/profile", {
      headers: {
        jwt: token
      }
    });
    dispatch({
      type: GET_USER,
      payload: { ...res.data, token: token }
    });
  } catch (err) {
    console.log("err " + err.message);
    dispatch(unauth());
  }
};

export const unauth = () => ({
  type: UNAUTHORIZED
});

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch({
    type: LOGOUT
  });
};
