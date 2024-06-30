import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { Button } from './Button.tsx';
import { cnButton } from './Button.classname.ts';

test('renders base primary button', () => {
    render(<Button />);

    const button = screen.getByText('', {
        selector: `.${cnButton()}`,
    });

    expect(button).toBeVisible();
    expect(button).toHaveClass(
        'Button Button_type_primary Button_size_36 Button_state_enabled',
    );
});

test('renders secondary button', () => {
    render(<Button type="secondary" />);

    const button = screen.getByText('', {
        selector: `.${cnButton()}`,
    });

    expect(button).toBeVisible();
    expect(button).toHaveClass('Button_type_secondary');
});

test('renders button with text', () => {
    render(<Button text="Что сделать?" />);

    const text = screen.getByText('Что сделать?');

    expect(text).toBeInTheDocument();
});

test('disabled button', () => {
    render(<Button state="disabled" />);

    const button = screen.getByText('', {
        selector: `.${cnButton()}`,
    });

    expect(button).toBeDisabled();
});

test('loading button', () => {
    render(<Button state="loading" />);

    const loader = screen.getByTestId('progress-indicator');

    expect(loader).toBeInTheDocument();
});

test('button with counter', () => {
    render(<Button quantityCounter="5" />);

    const counter = screen.getByText('5');
    expect(counter).toBeInTheDocument();
});

test('button with large counter', () => {
    render(<Button quantityCounter="100500" />);

    const counter = screen.getByText('99+');
    expect(counter).toBeInTheDocument();
});

test('counter size', () => {
    render(<Button size="56" quantityCounter="5" />);

    const counter = screen.getByText('', {
        selector: '.Counter',
    });

    expect(counter).toHaveClass('Counter_size_24');
});

test(`click on the button`, async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
});
