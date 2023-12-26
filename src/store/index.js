import { imageReducer } from "./imageSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    imageSlice: imageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
