import { v4 as uuidv4 } from 'uuid';
import { addTodoListAC, changeTitleAC, changeTaskStatusAC, addTaskAC, removeTaskAC, tasksReducer, removeTodoListAC } from './task-reducer';
import { allTasksListType } from '../../../App';

test('tasks remove-delete reducer function test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = removeTaskAC('taskArray1', '99')
    const endState = tasksReducer(startStete, action)
    
    expect(endState['taskArray1'].length).toBe(3)
    expect(endState['taskArray2'].length).toBe(3)
    expect(endState['taskArray1'].every(t => t.id !== '99')).toBeTruthy()
})

test('tasks add reducer function test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = addTaskAC('taskArray1', 'beach sex pathy')
    const endState = tasksReducer(startStete, action)
    
    expect(endState['taskArray1'].length).toBe(5)
    expect(endState['taskArray2'].length).toBe(3)
    expect(endState['taskArray1'][4].taskText).toBe('beach sex pathy')
    expect(endState['taskArray1'][4].done).toBe(false)

})

test('tasks status-done change reducer function test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = changeTaskStatusAC('taskArray1', '55', true)
    const endState = tasksReducer(startStete, action)
    
    expect(endState['taskArray1'][0].done).toBeTruthy()
    expect(endState['taskArray1'][1].done).toBeFalsy()
})

test('tasks title change reducer function test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = changeTitleAC('taskArray1', '55', 'funy booll shit')
    const endState = tasksReducer(startStete, action)
    
    expect(endState['taskArray1'][0].taskText).toBe('funy booll shit')
    expect(endState['taskArray1'][1].taskText).toBe('big heat')
})

test('new array will be added when new todo is added test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = addTodoListAC('new name', uuidv4())

    const endState = tasksReducer(startStete, action)
    
    const keys = Object.keys(endState)
    const newKey = keys.find(k => k !== 'taskArray2' && k !== 'taskArray1')
    if (!newKey) {
        throw new Error('boolshit!')
    }
    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
    expect(endState[keys[2]].length).toBe(0)
})

test('tasks remove reducer function test', () => {

    let startStete: allTasksListType  = {
        'taskArray1':     
    [
        { id: '55', taskText: 'work and travel', done: false },
        { id: '99', taskText: 'big heat', done: false },
        { id: uuidv4(), taskText: 'programing ts', done: false },
        { id: uuidv4(), taskText: 'programing back', done: false },
  
      ],
      'taskArray2':     [
        { id: uuidv4(), taskText: 'pork and crocodile', done: false },
        { id: uuidv4(), taskText: 'us amesr', done: true },
        { id: uuidv4(), taskText: 'graphQL', done: true },
      ]}

    const action = removeTodoListAC('taskArray1')
    const endState = tasksReducer(startStete, action)

    const keys = Object.keys(endState)
    
    expect(endState['taskArray1']).not.toBeDefined()

})