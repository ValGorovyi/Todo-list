import React, { useState } from 'react';
import './App.css';
import ToDoComponent, { TaskType } from './components/ToDo';
import { v4 as uuidv4 } from 'uuid';
import AddItemForm from './components/inputForm/InputFormComponent';
import { Container, Grid, Paper } from '@mui/material';

export type filterValuesType = 'all' | 'completed' | 'active'
export type todoListType = {
  id: string,
  title: string,
  filter: filterValuesType
}
export type allTasksListType = { 
  [key: string] : Array<TaskType>
}

function App() {

  //array of todolist
  const todoListId1 = uuidv4()
  const todoListId2 = uuidv4()
  let [todoList, setTodoList] = useState<Array<todoListType>>([
    {id: todoListId1, title: 'who is', filter: 'all'},
    {id: todoListId2, title: 'after evning', filter: 'all'}
  ])

  const [allTasks, setAllTasks] = useState<allTasksListType>({
    [todoListId1]:     [
      { id: uuidv4(), taskText: 'work and travel', done: false },
      { id: uuidv4(), taskText: 'big heat', done: false },
      { id: uuidv4(), taskText: 'programing ts', done: false },
      { id: uuidv4(), taskText: 'programing back', done: false },

    ],
    [todoListId2]:     [
      { id: uuidv4(), taskText: 'pork and crocodile', done: false },
      { id: uuidv4(), taskText: 'us amesr', done: true },
      { id: uuidv4(), taskText: 'graphQL', done: true },
    ]
  })


  function filterShowTodo( id: string, value: filterValuesType,) {
    let neededTodoList = todoList.find(tl => tl.id === id)
    if (neededTodoList) {
      neededTodoList.filter = value
      setTodoList([...todoList])
    }
  }

  function changeStatusChekbox(id: string, todoListId: string, isDone: boolean) {
    let tasks = allTasks[todoListId]
    let neededTask = tasks.find(t => t.id === id);
    if (neededTask) {
      neededTask.done = isDone;
      setAllTasks({...allTasks})
    }
  }
  function saveEditTitleTextUpperLevel(id: string, todoListId: string, title: string) {
    let tasks = allTasks[todoListId]
    let neededTask = tasks.find(t => t.id === id);
    if (neededTask) {
      neededTask.taskText = title;
      setAllTasks({...allTasks})
    }
  }
  function saveEditTitleNameUpperLevel(todoListId: string, title: string) {
    let neededTitle = todoList.find(t => t.id === todoListId);
    if(neededTitle) {
      neededTitle.title = title;
      setTodoList([...todoList])
    }
  }
  

  function removeTask(id: string, todoListId: string) {
    let task = allTasks[todoListId]

    let filteredTask = task.filter(t => t.id !== id);
    allTasks[todoListId] = filteredTask
    setAllTasks({...allTasks})
  }

  function addTask(taskText: string, todoListId: string) {
    const newT = {
      id: uuidv4(), taskText, done: false
    }
    let tasks = allTasks[todoListId]
    let newTasks = [...tasks, newT]
    allTasks[todoListId] = newTasks
    setAllTasks({...allTasks})
  }

  function removeTodoList(todoListId: string) {
    let filteredTodoList = todoList.filter(t => t.id !== todoListId)
    setTodoList(filteredTodoList)
    delete allTasks[todoListId]
    setAllTasks({...allTasks})
  }




  function addTodoListUpperLevel(title: string) {
    let newTodoList: todoListType = {id:uuidv4(), filter: 'all', title};
    setTodoList([...todoList, newTodoList])
    setAllTasks({...allTasks, [newTodoList.id]: []})
  }

  return (<Container maxWidth='md'>
    <div style={{marginBottom: '20px'}} >
      <AddItemForm  addItem={addTodoListUpperLevel}/>
      {todoList.map(tl => {
          let filteredTaskForTodo = allTasks[tl.id];

          if (tl.filter === 'active') {
            filteredTaskForTodo = filteredTaskForTodo.filter(t => t.done === false)
          }
          if (tl.filter === 'completed') {
            filteredTaskForTodo = filteredTaskForTodo.filter(t => t.done === true)
          }
        return <Container maxWidth="sm" >
        <Grid style={{marginBottom: '20px'}} >
          <Paper style={{padding: '20px'}} elevation={3}>
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

export default App;
