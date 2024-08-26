import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./../index";
import categoryiesReducer from "@/app/store/services/categoriesService";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    categories: categoryiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
