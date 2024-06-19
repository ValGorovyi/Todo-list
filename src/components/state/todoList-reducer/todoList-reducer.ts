import { v4 as uuidv4 } from 'uuid';
import { filterValuesType } from '../../../App';
import { todoListId1, todoListId2 } from '../tasks-reducer/task-reducer';

export type todoListType = {
    id: string
    title: string
    filter: filterValuesType
}

export type removeTodoListType = {
    type: 'REMOVE-TODO-LIST',
    id: string
}

export type addTodoListType = {
    type: 'ADD-TODO-LIST',
    title: string
    id: string
}

export type changeTodoListTitleType = {
    type: 'CHANGE-TITLE-TODO-LIST',
    id: string,
    title: string
}

export type changeTodoListFilterType = {
    type: 'CHANGE-FILTER-TODO-LIST',
    id: string,
    filter: filterValuesType
}

type ActionType = removeTodoListType | addTodoListType | changeTodoListFilterType | changeTodoListTitleType;

const initialState: Array<todoListType> = [
    { id: todoListId1, title: 'who is', filter: 'all' },
    { id: todoListId2, title: 'after evning', filter: 'all' }
]

export function todoListReducer(state: Array<todoListType> = initialState, action: ActionType): Array<todoListType>{
    switch (action.type) {
        case 'REMOVE-TODO-LIST':
            return state.filter(tl => tl.id !== action.id)
        
        case 'ADD-TODO-LIST':
            return [...state, {id: action.id, filter: 'all', title: action.title}]

        case 'CHANGE-TITLE-TODO-LIST': {
            let stateCopy = [...state]
            stateCopy = stateCopy.map(tl => tl.id === action.id ? 
                {...tl, title: action.title} 
                :
                {...tl}
            )
            // let neededTodoListForTitle = state.find(tl => tl.id === action.id)
            // if (neededTodoListForTitle) {
            //     neededTodoListForTitle.title = action.title                
            // }   
            return stateCopy
        }
        case 'CHANGE-FILTER-TODO-LIST' : {
            let stateCopy= [...state]
            stateCopy = stateCopy.map(tl => tl.id === action.id ? 
                {...tl, filter: action.filter} 
                :
                {...tl}
            )
            // let neededTodoListForFilter = state.find(tl => tl.id === action.id)
            // if (neededTodoListForFilter) {
            //     neededTodoListForFilter.filter = action.filter
            // }   
            return stateCopy
        }
        default:
            return state
    }
}

//ac

export function removeTodoListAC(id: string): removeTodoListType{
    return {type: 'REMOVE-TODO-LIST', id}
}
export function addTodoListAC(title: string): addTodoListType{
    return {type: 'ADD-TODO-LIST', title, id: uuidv4()}
}
export function changeTodoListTitleAC( id:string, title: string,): changeTodoListTitleType{
    return {type: 'CHANGE-TITLE-TODO-LIST', id, title}
}
export function changeTodoListFilterAC(id:string, filter: filterValuesType): changeTodoListFilterType{
    return {type: 'CHANGE-FILTER-TODO-LIST', id, filter}
}