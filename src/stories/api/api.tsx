import axios from "axios";

type myIdForAPIType = '31159'
type myKeyForAPIType = '548c3bd5-a037-4b4a-92ec-39c43680be5c'

const settings = {
    withCredentials: true,
    headers: { 'API-KEY': '548c3bd5-a037-4b4a-92ec-39c43680be5c' }
}
export const instanceAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type todoListApiType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

export type responseApiType<D = {}> = {
    resultCode: number,
    message: Array<string>,
    data: D
}
export type taskType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string
    id: string,
    todoListId: string,
    order: number,
    addedDate: string,
}
export type tasksGetApiType = {
    error: string | null,
    totalCound: number,
    items: taskType[]
}
export type taskPutApiType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todoListId: string,
    order: number,
    addedDate: string,
}
export type taskPutRequestType = { 
    title: string,
    description: string | null,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string | null,
    deadline: string | null,
}
