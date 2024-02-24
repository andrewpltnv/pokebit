import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootListingState } from "./types";

const initialState: RootListingState = {
	offset: 0,
	limit: 12,
};

export const paginationSlice = createSlice({
	name: "rootListing",
	initialState,
	reducers: {
		changeOffset: (state, action: PayloadAction<number>) => {
			state.offset = +action.payload;
		},
		changePerPageLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		handlePag: (state, action: PayloadAction<"prev" | "next">) => {
			switch (action.type) {
				case "next":
					state.offset += state.limit;
					break;
				case "prev":
					state.offset -= state.limit;
					break;
			}
		},
	},
});

export const { changeOffset, changePerPageLimit, handlePag } =
	paginationSlice.actions;

export default paginationSlice.reducer;
