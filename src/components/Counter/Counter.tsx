import React from 'react';

import { cnCounter } from './Counter.classname';

import {CounterProps} from "./types";
import './Counter.scss';

export const Counter = ({
    type = 'primary',
    size = '8',
    quantity,
    pulse = false,
}: CounterProps) => (
    <div
        className={cnCounter({
            type,
            size,
            pulse,
            'm-content': quantity?.length > 1,
            'l-content': quantity?.length > 2,
        })}
    >
        {(size === '12' || size === '8') && pulse && (
            <>
                <div className="counter-dot" />
                <div className="pulse one" />
                <div className="pulse two" />
            </>
        )}
        {size !== '8' &&
            size !== '12' &&
            (!isNaN(Number(quantity)) ? (
                <p className={cnCounter('quantity')}>
                    {quantity < 99 ? quantity : '99+'}
                </p>
            ) : (
                <p className={cnCounter('quantity')}>{quantity?.slice(0, 3)}</p>
            ))}
    </div>
);
