import React from 'react';
import AppWithRedux from './App-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Provider } from 'react-redux';
import { store } from './components/store/store';

const meta: Meta<typeof AppWithRedux> = {
    title: 'App with redux Base Example',
    component: AppWithRedux,
    tags: ['autodocs'],
    decorators: [(story) => <Provider store={store}>{story()}</Provider>,]
}

export default meta;
type Story = StoryObj<typeof AppWithRedux>

//for demo normal not interactive ui
export const AppWithReduxBaseExample: Story = {
    args:{
        // ?
    }
}
