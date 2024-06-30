import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter.tsx';

const meta = {
    title: 'Components/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
    },
};

export const Pulse: Story = {
    args: {
        size: '12',
        pulse: 'true',
    },
};

export const Quantity: Story = {
    args: {
        size: '20',
        quantity: '3',
    },
};
