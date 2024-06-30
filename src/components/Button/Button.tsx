import React, { useState } from 'react';

import { cnButton } from './Button.classname';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator.tsx';
import { Counter } from '../Counter/Counter.tsx';
import { CounterSize } from "../Counter/types";

import './Button.scss';
import { ButtonProps } from "./types";

export const Button = ({
    text,
    type = 'primary',
    size = '36',
    state = 'enabled',
    quantityCounter,
    onClick,
}: ButtonProps) => {
    const [isFocused, setIsFocused] = useState(false);

    let counterSize: CounterSize = '20';

    if (size === '28') {
        counterSize = '16';
    } else if (size === '56') {
        counterSize = '24';
    }

    const handleClick = () => {
        if (onClick) onClick();
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <button
            className={cnButton({
                type,
                size,
                state,
                quantityCounter,
                focused: isFocused,
            })}
            disabled={state === 'disabled'}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div className={cnButton('Content-group')}>
                {text}
                {state === 'loading' ? (
                    <ProgressIndicator />
                ) : (
                    Boolean(quantityCounter) && (
                        <Counter
                            type="secondary"
                            quantity={quantityCounter}
                            size={counterSize}
                        />
                    )
                )}
            </div>
        </button>
    );
};
