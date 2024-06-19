import React, { useCallback, } from 'react';
import './App.css';
import ToDoComponent, { TaskType } from './components/ToDo';
import AddItemForm from './components/inputForm/InputFormComponent';
import { Container, Grid, Paper } from '@mui/material';
import { addTodoListAC, changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC, todoListReducer } from './components/state/todoList-reducer/todoList-reducer';
import { addTaskAC, changeTaskStatusAC, changeTitleAC, removeTaskAC, tasksReducer } from './components/state/tasks-reducer/task-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './components/store/store';

export type filterValuesType = 'all' | 'completed' | 'active'
export type todoListType = {
    id: string,
    title: string,
    filter: filterValuesType
}
export type allTasksListType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const dispatch = useDispatch()

    const todoList = useSelector<AppRootState, Array<todoListType>>( state => state.todoList)
    const tasks = useSelector<AppRootState, allTasksListType>(state => state.tasks)

    const filterShowTodo = useCallback( function (id: string, value: filterValuesType ) {
        const action = changeTodoListFilterAC(id, value)
        dispatch(action)
    }, [dispatch])

    const changeStatusChekbox = useCallback( function (id: string, todoListId: string, isDone: boolean) {
        const action = changeTaskStatusAC(todoListId, id, isDone)
        dispatch(action)
    }, [dispatch])

    const saveEditTitleTextUpperLevel = useCallback( function (todoListId: string, id: string, title: string) {
        const action = changeTitleAC(todoListId, id, title)
        dispatch(action)
    }, [dispatch])

    const saveEditTitleNameUpperLevel = useCallback( function (todoListId: string, title: string) {
        const action = changeTodoListTitleAC(todoListId, title)
        dispatch(action)
    }, [dispatch])


    const removeTask = useCallback( function (id: string, todoListId: string) {
        const action = removeTaskAC(todoListId, id)
        dispatch(action)
    }, [dispatch])

    const addTask = useCallback( function (taskText: string, todoListId: string) {
        const action = addTaskAC(todoListId, taskText)
        dispatch(action)
    }, [dispatch])

    const removeTodoList = useCallback( function (todoListId: string) {
        const action = removeTodoListAC(todoListId);
        dispatch(action)
        dispatch(action)
    }, [dispatch])

    const addTodoListUpperLevel = useCallback(function (title: string) {
        const action = addTodoListAC(title)
        dispatch(action)
    }, [dispatch])
    console.log('appp');
    
    return (<Container maxWidth='md'>
        <div style={{ marginBottom: '20px' }} >
            <AddItemForm addItem={addTodoListUpperLevel} />
            {todoList.map(tl => {
                let tasksForTodo = tasks[tl.id];
                


                return <Container maxWidth="sm" key={tl.id}>
                    <Grid style={{ marginBottom: '20px' }} >
                        <Paper style={{ padding: '20px' }} elevation={3}>
                            <ToDoComponent 
                                saveEditTitleNameUpperLevel={saveEditTitleNameUpperLevel}
                                saveEditTitleTextUpperLevel={saveEditTitleTextUpperLevel}
                                removeTodoList={removeTodoList}
                                id={tl.id}
                                activeFilter={tl.filter}
                                addTask={addTask}
                                filterShowTodo={filterShowTodo}
                                title={tl.title}
                                changeStatusChekbox={changeStatusChekbox}
                                tasks={tasksForTodo}
                                removeTask={removeTask} />
                        </Paper>
                    </Grid></Container>
            })}

        </div>
    </Container>);
}

export default AppWithRedux;
