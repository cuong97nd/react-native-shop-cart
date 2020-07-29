import { GET_USER, UNAUTHORIZED, LOGOUT } from "../actions/types";

const initialState = { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InN1YiI6IjExMDIzNDkxNTkxNTk2OTE1NDU5MSIsIm5hbWUiOiJidWkgY3VvbmciLCJnaXZlbl9uYW1lIjoiYnVpIiwiZmFtaWx5X25hbWUiOiJjdW9uZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaV9MZ2xmZEdFeHB1LXB2NFJKMy16MEEwMjRjQWRpdXVKdFMxQXEiLCJsb2NhbGUiOiJ2aSJ9LCJpYXQiOjE1OTYwMzc2NjksImV4cCI6MTU5NjA4MDg2OX0.UmXbusXDsss2THZBLWTZGvgXVP49u9Fb1BJXwjI8ehw" };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UNAUTHORIZED:
      return {};
    case LOGOUT:
      return {};

    default:
      return state;
  }
};
