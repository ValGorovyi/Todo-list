import {legacy_createStore, combineReducers } from "redux";
import { tasksReducer } from "../state/tasks-reducer/task-reducer";
import { todoListReducer } from "../state/todoList-reducer/todoList-reducer";

export const rootStore = combineReducers({
    tasks: tasksReducer,
    todoList: todoListReducer,
})

export type AppRootState = ReturnType<typeof rootStore>



export const store = legacy_createStore(rootStore)

//@ts-ignore
window.store = store