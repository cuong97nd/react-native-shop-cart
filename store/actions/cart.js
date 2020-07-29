import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_WHOLE_ITEM,
  REMOVE_ALL_ITEM
} from "./types";
import axios from "axios";

export const addToCart = (item, i) => ({
  type: ADD_TO_CART,
  payload: item,
  index: i
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item
});

export const removeWholeItem = item => ({
  type: REMOVE_WHOLE_ITEM,
  payload: item
});

export const order = (customer, cart, token) => async dispatch => {
  try {
    await axios({
      method: "post",
      url: "https://severok-1.cuonhbui.repl.co/api/order",
      data: {
        customer: customer,
        cart: cart
      },
      headers: {
        jwt: token
      }
    });

    dispatch({
      type: REMOVE_ALL_ITEM
    });
  } catch (err) {
    console.log("err " + err.message);
  }
};
