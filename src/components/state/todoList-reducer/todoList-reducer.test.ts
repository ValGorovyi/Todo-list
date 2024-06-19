import { filterValuesType } from "../../../App";
import { addTodoListAC, changeTodoListFilterAC, changeTodoListFilterType, changeTodoListTitleAC, changeTodoListTitleType, removeTodoListAC, todoListReducer, todoListType } from "./todoList-reducer";
import { v4 as uuidv4 } from 'uuid';

test('todo list remove-delite function', () => {
    let id1 = uuidv4()
    let id2 = uuidv4()

    let startStete: Array<todoListType> = [{
            filter: 'all',
            title: 'study typeScript',
            id: id1
        },
        {
            filter: 'all',
            title: 'study react',
            id: id2
        },
    ]

    const endState = todoListReducer(startStete, removeTodoListAC(id1))
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(id2)

})

test('todo list add list function', () => {
    let id1 = uuidv4()
    let id2 = uuidv4()

    let startStete: Array<todoListType> = [{
            filter: 'all',
            title: 'study typeScript',
            id: id1
        },
        {
            filter: 'all',
            title: 'study react',
            id: id2
        },
    ]
    const addedTitleForTodo = 'money and fun'

    const endState = todoListReducer(startStete, addTodoListAC(addedTitleForTodo))
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(addedTitleForTodo)

})

test('todo list change title function', () => {
    let id1 = uuidv4()
    let id2 = uuidv4()

    let startStete: Array<todoListType> = [{
            filter: 'all',
            title: 'study typeScript',
            id: id1
        },
        {
            filter: 'all',
            title: 'study react',
            id: id2
        },
    ]
    const changedTitle = 'money and fun!!!'

    const endState = todoListReducer(startStete, changeTodoListTitleAC(id1, changedTitle))
    
    expect(endState[0].title).toBe(changedTitle)
    expect(endState[0].filter).toBe('all')

})

test('todo list change FILTER function', () => {
    let id1 = uuidv4()
    let id2 = uuidv4()

    let startStete: Array<todoListType> = [{
            filter: 'all',
            title: 'study typeScript',
            id: id1
        },
        {
            filter: 'all',
            title: 'study react',
            id: id2
        },
    ]
    const newFilter: filterValuesType = 'completed'

    const endState = todoListReducer(startStete, changeTodoListFilterAC(id2, newFilter))
    expect(endState[0].filter).toBe('all')
    expect(endState[1].filter).toBe('completed')

})