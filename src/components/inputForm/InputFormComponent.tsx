import React, { ChangeEvent, useState, KeyboardEvent, useCallback } from 'react';
import { Button, TextField } from '@mui/material';

type AddItemPropsType = {
    addItem: (text: string) => void
}

const AddItemForm = React.memo(function (props: AddItemPropsType) {
    console.log('add item form is calld');
        
    let [error, setError] = useState<string | null>(null);
    let [newTaskTitle, setNewTaskTitle] = useState('');

    const onNewTitleChangeHandler = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        setNewTaskTitle(e.currentTarget.value)
    },[])

    const onKeyDownHandler = useCallback(function (e: KeyboardEvent<HTMLInputElement>) {
        if (e.repeat) return;

        if (error !== null) {
            setError(null)
        }

        if (e.code === 'Enter') {
            addItemDownLewel(newTaskTitle)
        }
    },[])
    const addItemDownLewel = useCallback(function (text:string) {
        if (text.trim() === '') {
            setError('error')
            return
        }
        props.addItem(text);
        setNewTaskTitle('')
    },[props.addItem])
    

    return (<>
            <TextField 
                label="Your to do value" 
                variant="standard" 
                // className={error ? css.inputError : ''}
                type="text"
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyDown={onKeyDownHandler} 
                error={!!error}
                helperText="Empty check failed."

            />
            <Button variant='contained' onClick={() => addItemDownLewel(newTaskTitle)}>Add Form!!</Button>
        </>)
})

export default AddItemForm;