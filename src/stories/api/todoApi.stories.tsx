import React, { useEffect, useState } from "react";
import {responseApiType, instanceAPI, todoListApiType } from "./api";

export default {
    title: 'todo l api story'
}

export function GetTodoListStories() {

    const [state, setStete] = useState<any>(null)

    useEffect(() => {
        instanceAPI.get<Array<todoListApiType>>('/todo-lists')
            .then((res) => {
                setStete(res.data)
            })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

export function PostTodoListStories() {

    const [state, setStete] = useState<any>(null)

    useEffect(() => {
        instanceAPI.post<responseApiType<{item: todoListApiType}>>('/todo-lists', 
        {
            "id": "a2dfe62b-ebce-4b37-9581-1cc77ebc999f",
            "title": "no life. no rules",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0
          }
        )
            .then((res) => {
                setStete(res.data)
            })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

export function PutTodoListStories() {

    const [state, setStete] = useState<any>(null)

    useEffect(() => {

        const todoListId = 'f9ea35cd-77cf-44fb-8985-340dc38c02f6'

        instanceAPI.put<responseApiType>(`/todo-lists/${todoListId}`, 
        {
            "title": "no war. ptn hlo"
          }
        )
            .then((res) => {
                setStete(res.data)
            })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

export function DeleteTodoListStories() {

    const [state, setStete] = useState<any>(null)

    useEffect(() => {

        const todoListId = 'f9ea35cd-77cf-44fb-8985-340dc38c02f6'


        instanceAPI.delete<responseApiType>(`/todo-lists/${todoListId}`)
            .then((res) => {
                setStete(res.data)
            })
    },[])
    return <div>{JSON.stringify(state)}</div>
}