import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import MovieSlice from "./slices/MovieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
