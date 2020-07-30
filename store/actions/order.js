import axios from "axios";
import { GET_ORDER, REMOVE_ORDER } from "./types";

export const getOrder = token => async dispatch => {
  try {
    const res = await axios("https://severok-1.cuonhbui.repl.co/api/order", {
      headers: {
        jwt: token
      }
    });
    const orders = res.data.orders.reverse();

    dispatch({
      type: GET_ORDER,
      payload: orders
    });
  } catch (err) {
    console.log(err.message);
  }
};
export const removeOrder = () => ({
  type: REMOVE_ORDER
});
