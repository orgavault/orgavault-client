import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const Notes = createSlice({
    name: 'Notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        }
    }

})

export const { addNote } = Notes.actions;

export const NotesReducer = Notes.reducer
