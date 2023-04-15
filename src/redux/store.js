// store.js
import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./seatReducer";

const store = configureStore({
    reducer: {
        seat: seatReducer,
    }
}
)
store.subscribe(() => {});


export default store;