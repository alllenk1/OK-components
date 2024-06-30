import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Button } from './Button.tsx';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        text: 'Что сделать',
    },
};

export const Large: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
        size: '56',
    },
};

export const Small: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
        size: '28',
    },
};

export const Loading: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
        state: 'loading',
    },
};

export const Disabled: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
        state: 'disabled',
    },
};

export const WithCounter: Story = {
    args: {
        type: 'primary',
        text: 'Что сделать',
        quantityCounter: '3',
    },
};
