import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		pagination: paginationReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
