import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./reducers/tripReducer";
import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    trip: tripReducer,
    user: userReducer,
  },
});
