import React, { ChangeEvent, useState, useCallback} from 'react';
import { TaskType } from './ToDo';
import { EditleSpanOrInput } from './editleSpan';
import {Button, IconButton, Checkbox, TextField} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



type TaskPropsType = {
    task: TaskType
    removeTask: (todoListId:string, taskId: string) => void,
    changeStatusChekbox: (todoListId: string, taskId: string, value: boolean ) => void
    todoListId: string
    saveEditTitleText: (taskId: string, text: string) => void

}

export const Task = React.memo( function(props: TaskPropsType){
    
    const onRemoveHendlerDelete = useCallback(function () {
        props.removeTask(props.task.id, props.todoListId )
    }, [props.removeTask, props.task, props.todoListId])
    const onChangeHendlerChekbox = useCallback(function (e: ChangeEvent<HTMLInputElement>) { 
        props.changeStatusChekbox( props.task.id, props.todoListId, e.currentTarget.checked)
    }, [props.changeStatusChekbox, props.task, props.todoListId ]) 
    const saveEditTitleTextMidlelevel = useCallback(function (title: string) {
        props.saveEditTitleText(props.task.id, title)
    }, [props.saveEditTitleText])
    return <div key={props.task.id}>
        <EditleSpanOrInput title={props.task.taskText}
            saveEditTitleText={saveEditTitleTextMidlelevel} />
        <Checkbox
            color='secondary'
            onChange={onChangeHendlerChekbox}
            checked={props.task.done} />
        <IconButton onClick={onRemoveHendlerDelete}>
            <DeleteForeverIcon color='inherit' fontSize={'large'}>Delete</DeleteForeverIcon>
        </IconButton>
    </div>
})