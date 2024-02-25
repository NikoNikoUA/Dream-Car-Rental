import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchAllCars } from "../../../src/redux/cars/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    allCars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(fetchAllCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
