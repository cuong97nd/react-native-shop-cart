import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_WHOLE_ITEM,
  REMOVE_ALL_ITEM
} from "../actions/types";

const initialState = [];

const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem._id !== item._id);
const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem._id === item._id)[0];
const exitingAddToCart = (cart, item) =>
  cart.map(cartItem =>
    cartItem._id === item._id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

const exitingRemoveFromCart = (cart, item) =>
  cart.map(cartItem =>
    cartItem._id === item._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : exitingAddToCart(cart, item);
};

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : exitingRemoveFromCart(cart, item);
};

const removeWholeItem = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case REMOVE_WHOLE_ITEM:
      return removeWholeItem(state, action.payload);
    case REMOVE_ALL_ITEM:
      return [];
    default:
      return state;
  }
};
