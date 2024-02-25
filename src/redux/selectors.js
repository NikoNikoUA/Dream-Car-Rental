export const selectGetCars = (state) => state.cars.cars;
export const selectGetAllCars = (state) => state.cars.allCars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFilter = (state) => state.filter.filter;
export const selectPage = (state) => state.cars.page;

export const selectFavCars = (state) => state.favCars.favorites;
