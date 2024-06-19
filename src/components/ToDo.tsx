import React, { ChangeEvent, useState, useCallback} from 'react';
import { filterValuesType } from '../App';
import AddItemForm from './inputForm/InputFormComponent';
import {Button, IconButton, Checkbox, TextField} from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { EditleSpanOrInput } from './editleSpan'
import { Task } from './Task';

export type TaskType = {
    id: string
    taskText: string
    done: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListId: string) => void
    filterShowTodo: (id:string, value: filterValuesType) => void
    addTask: (title: string, todoListId:string) => void
    changeStatusChekbox: (id: string, todoListId: string, isDone: boolean) => void
    activeFilter: filterValuesType
    id: string
    removeTodoList: (todoListId: string) => void
    saveEditTitleTextUpperLevel: (todoListId: string, id: string,  title: string) => void
    saveEditTitleNameUpperLevel: (todoListId: string, title: string) => void
}

const ToDoComponent = React.memo(function (props: PropsType) {
    console.log('todo list is cald');
    
    //setter text button. repeat code
    const addTaskMidleLevel = useCallback(function (text: string) {
        if (text.trim() === '') {
            return
        }
        props.addTask(text, props.id)
    }, [props.addTask])

    //filters funk
    const onAllClickFilter = useCallback(function () { props.filterShowTodo(props.id,'all' ) }, [props.filterShowTodo, props.id])
    const onCompletedClickFilter = useCallback(function () { props.filterShowTodo(props.id, 'completed') }, [props.filterShowTodo, props.id])
    const onActiveClickFilter = useCallback(function () { props.filterShowTodo(props.id, 'active') }, [props.filterShowTodo])

    const removeTodoList = useCallback(function (todoListId:string) {
        props.removeTodoList(todoListId)
    }, [props.removeTask])


    const saveEditTitleName = useCallback(function (title: string) {
        props.saveEditTitleNameUpperLevel(props.id, title)
    }, [props.saveEditTitleNameUpperLevel, props.id])

    const saveEditTitleText = useCallback(function(taskId: string, title: string){
        props.saveEditTitleTextUpperLevel(props.id, taskId, title)
    },
    [])
    
    let tasksLocal = props.tasks
    if (props.activeFilter  === 'active') {
        tasksLocal = props.tasks.filter(t => t.done === false)
    }
    if (props.activeFilter  === 'completed') {
        tasksLocal = props.tasks.filter(t => t.done === true)
    }

    return (
        <div>
            <h3>
                <EditleSpanOrInput saveEditTitleText={saveEditTitleName} title={props.title} />
                <BackspaceIcon onClick={()=> removeTodoList(props.id)} fontSize='large'></BackspaceIcon>
            </h3>
            <div>
                
                {tasksLocal.map((t) => 
                    <Task
                    task={t}
                    removeTask={props.removeTask}
                    changeStatusChekbox={props.changeStatusChekbox}
                    saveEditTitleText={saveEditTitleText}
                    todoListId={props.id}
                    key={t.id}                    
                    />
                )}

                <Button color="secondary" variant={props.activeFilter === 'all' ? 'outlined' : 'text'}  onClick={onAllClickFilter}>All</Button>
                <Button color="secondary" variant={props.activeFilter === 'completed' ? 'outlined' : 'text'} onClick={onCompletedClickFilter}>Is Done</Button>
                <Button color="secondary" variant={props.activeFilter === 'active' ? 'outlined' : 'text'}  onClick={onActiveClickFilter}>IS Not Done</Button>
            </div>
            <AddItemForm addItem={addTaskMidleLevel}/>
        </div>
    )
})








export default ToDoComponent

