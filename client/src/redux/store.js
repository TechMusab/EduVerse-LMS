import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/dashboardSlice";

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
})
export default store;