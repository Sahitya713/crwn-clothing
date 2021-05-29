import { combineReducers } from "redux";
import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

import "./user/user.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const cartBlacklist = createTransform(
  null,
  (state, key) => {
    const newState = { ...state };
    newState.hidden = true;
    return newState;
  },
  { whitelist: ["cart"] }
);
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [cartBlacklist],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
