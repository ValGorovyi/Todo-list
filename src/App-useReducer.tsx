import React, { useReducer, useState } from 'react';
import './App.css';
import ToDoComponent, { TaskType } from './components/ToDo';
import { v4 as uuidv4 } from 'uuid';
import AddItemForm from './components/inputForm/InputFormComponent';
import { Container, Grid, Paper } from '@mui/material';
import { addTodoListAC, changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC, todoListReducer } from './components/state/todoList-reducer/todoList-reducer';
import { addTaskAC, changeTaskStatusAC, changeTitleAC, removeTaskAC, tasksReducer } from './components/state/tasks-reducer/task-reducer';

export type filterValuesType = 'all' | 'completed' | 'active'
export type todoListType = {
    id: string,
    title: string,
    filter: filterValuesType
}
export type allTasksListType = {
    [key: string]: Array<TaskType>
}

function AppWithUseReducer() {

    //array of todolist
    const todoListId1 = uuidv4()
    const todoListId2 = uuidv4()
    const [todoList, dispatchTodoList] = useReducer(todoListReducer, [
        { id: todoListId1, title: 'who is', filter: 'all' },
        { id: todoListId2, title: 'after evning', filter: 'all' }
    ])
    const [tasks, dispatchTasks] = useReducer(tasksReducer, {
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
    })


    function filterShowTodo(id: string, value: filterValuesType ) {
        const action = changeTodoListFilterAC(id, value)
        dispatchTodoList(action)
    }

    function changeStatusChekbox(id: string, todoListId: string, isDone: boolean) {
        const action = changeTaskStatusAC(todoListId, id, isDone)
        dispatchTasks(action)
    }

    function saveEditTitleTextUpperLevel(id: string, todoListId: string, title: string) {
        const action = changeTitleAC(todoListId, id, title)
        dispatchTasks(action)
    }

    function saveEditTitleNameUpperLevel(todoListId: string, title: string) {
        const action = changeTodoListTitleAC(todoListId, title)
        dispatchTodoList(action)
    }


    function removeTask(id: string, todoListId: string) {
        const action = removeTaskAC(todoListId, id)
        dispatchTasks(action)
    }

    function addTask(taskText: string, todoListId: string) {
        const action = addTaskAC(todoListId, taskText)
        dispatchTasks(action)
    }

    function removeTodoList(todoListId: string) {
        const action = removeTodoListAC(todoListId);
        dispatchTodoList(action)
        dispatchTasks(action)
    }

    function addTodoListUpperLevel(title: string) {
        const action = addTodoListAC(title)
        dispatchTodoList(action)
    }

    return (<Container maxWidth='md'>
        <div style={{ marginBottom: '20px' }} >
            <AddItemForm addItem={addTodoListUpperLevel} />
            {todoList.map(tl => {
                let filteredTaskForTodo = tasks[tl.id];

                if (tl.filter  === 'active') {
                    filteredTaskForTodo = filteredTaskForTodo.filter(t => t.done === false)
                }
                if (tl.filter === 'completed') {
                    filteredTaskForTodo = filteredTaskForTodo.filter(t => t.done === true)
                }
                return <Container maxWidth="sm" >
                    <Grid style={{ marginBottom: '20px' }} >
                        <Paper style={{ padding: '20px' }} elevation={3}>
                            <ToDoComponent key={tl.id}
                                saveEditTitleNameUpperLevel={saveEditTitleNameUpperLevel}
                                saveEditTitleTextUpperLevel={saveEditTitleTextUpperLevel}
                                removeTodoList={removeTodoList}
                                id={tl.id}
                                activeFilter={tl.filter}
                                addTask={addTask}
                                filterShowTodo={filterShowTodo}
                                title={tl.title}
                                changeStatusChekbox={changeStatusChekbox}
                                tasks={filteredTaskForTodo}
                                removeTask={removeTask} />
                        </Paper>
                    </Grid></Container>
            })}

        </div>
    </Container>);
}

export default AppWithUseReducer;
