import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./../index";
import categoriesReducer from "@services/categoriesService";
import generalReducer from "@services/generalService";
import uiReducer from "@services/uiServices";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    categories: categoriesReducer,
    ui: uiReducer,
    general: generalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
