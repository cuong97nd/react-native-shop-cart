import axios from "axios";
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios("https://severok-1.cuonhbui.repl.co/api/products");
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.products
    });
  } catch (err) {

  }
};
