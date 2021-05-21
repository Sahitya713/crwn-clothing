import cartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart, clearItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: cartActionTypes.TOGGLE_CART_HIDDEN,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
