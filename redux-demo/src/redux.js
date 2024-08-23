import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        allTasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.allTasks.push(action.payload)
        }
    }
})

export const { addTask } = todoSlice.actions;
export const todoStore = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
});