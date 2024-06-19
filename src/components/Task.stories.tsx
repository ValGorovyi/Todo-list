import React from 'react';
import { Task } from './Task';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

//iframe.html

const meta: Meta<typeof Task> = {
    title: 'Task Base Example',
    component: Task,
    tags: ['autodocs'],
    args: {
        changeStatusChekbox: fn(),
        removeTask: fn(),
        saveEditTitleText: fn()
    }
}

export default meta;
type Story = StoryObj<typeof Task>

//for demo normal not interactive ui
export const Task1BaseExample: Story = {
    args:{
        task: {id:'taskId1', done: false, taskText:'task for stories 111'},
        todoListId: 'todoListId1',
        // changeStatusChekbox: 'k',
        // removeTask: 1,
        // saveEditTitleText: 'd'
    }
}
export const Task2BaseExample: Story = {
    args:{
        task: {id:'taskId2', done: true, taskText:'task for stories 222'},
        todoListId: 'todoListId2',
        // changeStatusChekbox: 'k',
        // removeTask: 1,
        // saveEditTitleText: 'd'
    }
}