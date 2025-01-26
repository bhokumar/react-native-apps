import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites";

const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
});

export default store;