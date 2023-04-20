import { configureStore } from "@reduxjs/toolkit";
import { NotesReducer } from "./reducers/NotesSlice";

const store = configureStore({
    reducer: NotesReducer
})

export default store;