import React, { useEffect, useState , ChangeEvent} from "react";
import {responseApiType, instanceAPI, tasksGetApiType, taskPutRequestType ,taskPutApiType} from "./api";

export default {
    title: 'tasks api story'
}

export function GetTasksTodoListStories() {

    const [state, setStete] = useState<any>(null)

    useEffect(() => {

        const todoListId = '2170c097-79d8-4f72-ab94-bcc515c512cd'

        instanceAPI.get<tasksGetApiType>(`/todo-lists/${todoListId}/tasks`)
            .then((res) => {
                setStete(res.data)
            })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

export function DeleteTasksTodoListStories() {

    const [state, setStete] = useState<any>(null)
    const [inputTodoListIdState, setTodoListIdState] = useState<string>('2170c097-79d8-4f72-ab94-bcc515c512cd')
    const [inputTaskIdState, setTaskIdState] = useState<string>('')

    // useEffect(() => {

    //     const todoListId = '2170c097-79d8-4f72-ab94-bcc515c512cd'
    //     const taskId = '1c397d56-8afa-4490-900c-32acd03cd1a8'

    //     instanceAPI.delete<responseApiType>(`/todo-lists/${todoListId}/tasks/${taskId}`)
    //         .then((res) => {
    //             setStete(res.data)
    //         })
    // },[])
    function printTodoID(e: ChangeEvent<HTMLInputElement>) {
        setTodoListIdState(e.currentTarget.value)
    }
    function printTaskID(e: ChangeEvent<HTMLInputElement>) {
        setTaskIdState(e.currentTarget.value)
    }
    function deleteForApi() {

        instanceAPI.delete<responseApiType>(`/todo-lists/${inputTodoListIdState}/tasks/${inputTaskIdState}`)
        .then((res) => {
            setStete(res.data)
        }) 
    }
    return <div>
        <input onChange={printTodoID} placeholder="Todo List ID" type="text"/>
        <input onChange={printTaskID} placeholder="Task ID" type="text"/>
        <button onClick={deleteForApi}>Delete. Go to server</button>
        {JSON.stringify(state)}</div>
}


export function PostTasksTodoListStories() {

    const [state, setStete] = useState<any>(null)
    const [inputTodoListIdState, setTodoListIdState] = useState<string>('2170c097-79d8-4f72-ab94-bcc515c512cd')
    const [taskTitleState, setTaskTitleStete] = useState<string>('')



    // useEffect(() => {

    //     const todoListId = '2170c097-79d8-4f72-ab94-bcc515c512cd'

    //     instanceAPI.post(`/todo-lists/${todoListId}/tasks`, {title: 'task 1 rnr'})
    //         .then((res) => {
    //             setStete(res.data)
    //         })
    // },[])
    function printTodoID(e: ChangeEvent<HTMLInputElement>) {
        setTodoListIdState(e.currentTarget.value)
    }
    function printTaskTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskTitleStete(e.currentTarget.value)
    }
    function postForApi() {
        console.log(inputTodoListIdState);
        console.log(taskTitleState);
        
        
        instanceAPI.post(`/todo-lists/${inputTodoListIdState}/tasks`, {title: taskTitleState})
            .then((res) => {
                setStete(res.data)
            })
    }

    return <div>
        <input onChange={printTodoID} placeholder="Todo List ID" type="text"/>
        <input onChange={printTaskTitle} placeholder="Task Title" type="text"/>
        <button onClick={postForApi}>Post. Go to server</button>
        {JSON.stringify(state)}</div>
}


export function PutTasksTodoListStories() {

    const [state, setStete] = useState<any>(null)
    const [taskPutState, setTaskPutState] = useState<string>('')
    const [inputTodoListIdState, setTodoListIdState] = useState<string>('2170c097-79d8-4f72-ab94-bcc515c512cd')
    const [taskIdState, setTaskIdState] = useState<string>('')


    // useEffect(() => {

    //     const todoListId = '2170c097-79d8-4f72-ab94-bcc515c512cd'

    //     const objForPutTask:taskPutRequestType = {
    //         title: ' rock n roll', 
    //         description:null, 
    //         // todoListId:'2170c097-79d8-4f72-ab94-bcc515c512cd',
    //         completed: false,
    //         status: 0,
    //         priority: 1,
    //         startDate: null,
    //         deadline: null
    //     }

    //     instanceAPI.put<taskPutApiType>(`/todo-lists/${todoListId}/tasks`, objForPutTask)
    //         .then((res) => {
    //             setStete(res.data)
    //         })
    // },[])

    function printTodoID(e: ChangeEvent<HTMLInputElement>) {
        setTodoListIdState(e.currentTarget.value)
    }
    function printTaskTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskPutState(e.currentTarget.value)
    }

    function putTaskApi() {

        const objForPutTask:taskPutRequestType = {
            title: taskPutState, 
            description:null, 
            completed: false,
            status: 0,
            priority: 1,
            startDate: null,
            deadline: null
        } 
        console.log(inputTodoListIdState);
        console.log(objForPutTask);
        
        instanceAPI.put<taskPutApiType>(`/todo-lists/${inputTodoListIdState}/tasks/${taskIdState}`, objForPutTask)
            .then((res) => {
                setStete(res.data)
            })
    }
    function printTaskID(e: ChangeEvent<HTMLInputElement>) {
        setTaskIdState(e.currentTarget.value)

    }
    return <div>
        <input onChange={printTodoID} placeholder="Todo List ID" type="text"/>
        <input onChange={printTaskID} placeholder="Task ID" type="text"/>
        <input onChange={printTaskTitle} placeholder="Task Title" type="text"/>
        

        <button onClick={putTaskApi}>Put. Go to server</button>
        {JSON.stringify(state)}</div>
}