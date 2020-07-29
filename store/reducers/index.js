import { combineReducers } from "redux";
import productsReducer from "./products";
import cartReducer from "./cart";
import userReducer from "./user";
import orderReducer from "./order";


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer
});

export default rootReducer;
