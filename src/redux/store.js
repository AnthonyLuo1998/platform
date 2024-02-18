import { configureStore } from "@reduxjs/toolkit";
import dropReducer from "./slice/drop";

const store = configureStore({
  reducer: {
    drop: dropReducer,
  },
});

export default store;
