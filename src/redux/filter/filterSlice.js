import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: {
      make: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
    },
  },
  reducers: {
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterValue } = filterSlice.actions;
