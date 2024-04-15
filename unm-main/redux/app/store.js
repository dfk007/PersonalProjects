import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterReducer";
import navbarReducer from "../features/navbarReducer";
import priceReducer from "../features/priceReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    price: priceReducer,
  },
});
