import { render, screen } from '@testing-library/react';

import { Counter } from './Counter.tsx';
import { cnCounter } from './Counter.classname.ts';
import { Button } from '../Button/Button.tsx';

test('render default counter', () => {
    render(<Counter />);

    const counter = screen.getByText('', {
        selector: `.${cnCounter()}`,
    });

    expect(counter).toBeVisible();
});

test('render secondary counter', () => {
    render(<Counter type="secondary" />);

    const counter = screen.getByText('', {
        selector: `.${cnCounter()}`,
    });

    expect(counter).toHaveClass('Counter_type_secondary');
});
