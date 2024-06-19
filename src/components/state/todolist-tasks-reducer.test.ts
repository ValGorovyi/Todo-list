import { allTasksListType, } from '../../App';
import {tasksReducer } from './tasks-reducer/task-reducer';
import { todoListReducer, addTodoListAC, todoListType } from './todoList-reducer/todoList-reducer';

test('new array will be added when new todo is added test', () => {

    let startTaskStete: allTasksListType  = {}
    let startTodoListState: Array<todoListType> = []

    const action = addTodoListAC('new name')

    const endTaskState = tasksReducer(startTaskStete, action)
    const endTodoListState = todoListReducer(startTodoListState, action)
    
    const keys = Object.keys(endTaskState)
    
    const idFormTask = keys[0]
    const idFormTodoList = endTodoListState[0].id
    
    expect(idFormTodoList).toBe(action.id)
    expect(idFormTask).toBe(action.id)
})