import React from 'react';
import { EditleSpanOrInput } from './editleSpan';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof EditleSpanOrInput> = {
    title: 'Editle span/input  Base Example',
    component: EditleSpanOrInput,
    tags: ['autodocs'],
    args: {
        saveEditTitleText: fn()
    }
}

export default meta;
type Story = StoryObj<typeof EditleSpanOrInput>

//for demo normal not interactive ui
export const EditbleSpan1BaseExample: Story = {
    args:{
        title: 'EditbleSpan1BaseExample'
    }
}
export const EditbleSpan2BaseExample: Story = {
    args:{
        title: 'EditbleSpan2BaseExample'
    }
}