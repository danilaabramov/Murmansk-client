import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/user.api";
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    auth:authReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
