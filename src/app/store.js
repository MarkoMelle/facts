import { configureStore } from "@reduxjs/toolkit";
import factsReducer from "../features/facts/factsSlice";

const store = configureStore({
  reducer: {
    facts: factsReducer
  }
});

export default store;
