import React from 'react';
import AddItemForm from './InputFormComponent';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof AddItemForm> = {
    title: 'addItemForm',
    component: AddItemForm,
    tags: ['autodocs'],
    args: {addItem: fn(),}
}

export default meta;
type Story = StoryObj<typeof AddItemForm>

export const AddItemFormBaseExample: Story = {
    args:{
        
    }
}