import React, {ChangeEvent, useCallback} from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

export type EditleSpanPropsType  = {
    title: string
    saveEditTitleText: (editTitleText: string) => void
}

export const EditleSpanOrInput = React.memo(function (props: EditleSpanPropsType) {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [editTitleText, setEditTitleText] = useState('');
    

    const activateEdit = useCallback(function () {
        setEditMode(true)
        setEditTitleText(props.title)
    },[props.title])
    const deActivateEditMode = useCallback(function  () {
        setEditMode(false)
        props.saveEditTitleText(editTitleText)
    }, [props.saveEditTitleText])
    const onEdit = useCallback(function onEdit(e: ChangeEvent<HTMLInputElement>) {
        setEditTitleText(e.currentTarget.value)
        
    },[])
    return(<>
        {editMode ? 
                <TextField
                autoFocus
                onChange={onEdit}
                value={editTitleText} 
                onBlur={deActivateEditMode}
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
        : 
        <span onDoubleClick={activateEdit}>{props.title}</span>}
    </>)
})