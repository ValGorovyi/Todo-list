import { allTasksListType, } from "../../../App-redux"
import { v4 as uuidv4 } from 'uuid';
import { TaskType } from "../../ToDo";
import { removeTodoListType } from "../todoList-reducer/todoList-reducer";


export type removeTaskActionType = {
  taskId: string,
  todoListId: string
  type: 'REMOVE-TASK'
}
export type addTaskActionType = {
  type: 'ADD-TASK',
  todoListId: string,
  taskText: string
}
export type changeTaskType = {
  todoListId: string,
  taskId: string,
  changeStatus: boolean,
  type: 'CHANGE-STATUS-TASK'
}
export type changeTitleType = {
  todoListId: string,
  taskId: string,
  title : string,
  type: 'CHANGE-TITLE-TASK'
}
export type addTodoListType = {
  type: 'ADD-TODO-LIST',
  title: string,
  id: string
}
type actionTasksType = removeTaskActionType | addTaskActionType | changeTaskType |
 changeTitleType | addTodoListType | removeTodoListType

export const todoListId1 = uuidv4()
export const todoListId2 = uuidv4()

const initialState = {
  [todoListId1]: [
      { id: uuidv4(), taskText: 'work and travel', done: false },
      { id: uuidv4(), taskText: 'big heat', done: false },
      { id: uuidv4(), taskText: 'programing ts', done: false },
      { id: uuidv4(), taskText: 'programing back', done: false },

  ],
  [todoListId2]: [
      { id: uuidv4(), taskText: 'pork and crocodile', done: false },
      { id: uuidv4(), taskText: 'us amesr', done: true },
      { id: uuidv4(), taskText: 'graphQL', done: true },
  ]
}



export function tasksReducer(state: allTasksListType = initialState, action: actionTasksType): allTasksListType {
  switch (action.type) {
    case 'REMOVE-TASK': {
      let stateCopy = { ...state }
      const neededTasks = state[action.todoListId]
      const filteredTask = neededTasks.filter(t => t.id !== action.taskId)
      stateCopy[action.todoListId] = filteredTask
      return stateCopy
    }
    case 'ADD-TASK': {
      let stateCopy = { ...state }
      const newT: TaskType = { id: uuidv4(), done: false, taskText: action.taskText }
      const tasks = stateCopy[action.todoListId]
      const newTasks = [...tasks, newT]
      stateCopy[action.todoListId] = newTasks

      return stateCopy
    }
    case 'CHANGE-STATUS-TASK': {
      let stateCopy = { ...state }
      const neededTasks = stateCopy[action.todoListId]
      stateCopy[action.todoListId] = neededTasks.map(t => t.id === action.taskId ?
        {...t, done: action.changeStatus} : t
      )

      // let neededTask = neededTasks.find(t => t.id === action.taskId)
      // if (neededTask) {
      //   neededTask.done = action.changeStatus
      // }
      return stateCopy
    }
    case 'CHANGE-TITLE-TASK': {
      debugger
      let stateCopy = { ...state }
      const neededTasks = stateCopy[action.todoListId]
      stateCopy[action.todoListId] = neededTasks.map(t => t.id === action.taskId ?
        {...t, taskText: action.title} : t
      )

      return stateCopy
    }
    case 'ADD-TODO-LIST': {
      const stateCopy = {...state}
      stateCopy[action.id] = []
      return stateCopy
    }
    case 'REMOVE-TODO-LIST': {
      const stateCopy = {...state}
      delete stateCopy[action.id]
      return stateCopy
    }
    default: return state 
  }
}
export function removeTaskAC(todoListId: string, taskId: string,): removeTaskActionType {
  return { type: 'REMOVE-TASK', taskId, todoListId }
}
export function addTaskAC(todoListId: string, taskText: string,): addTaskActionType {
  return { type: 'ADD-TASK', todoListId, taskText }
}
export function changeTaskStatusAC(todoListId: string, taskId: string, changeStatus: boolean): changeTaskType {
  return { type: 'CHANGE-STATUS-TASK', todoListId, taskId, changeStatus }
}
export function changeTitleAC(todoListId: string, taskId: string, title: string): changeTitleType {
  return { type: 'CHANGE-TITLE-TASK', todoListId, taskId, title }
}
export function addTodoListAC(title: string, id: string): addTodoListType{
  return {type: 'ADD-TODO-LIST', title, id}
}
export function removeTodoListAC( todoListId: string) : removeTodoListType{
  return {type: 'REMOVE-TODO-LIST', id: todoListId}
}