import React from 'react';

import { cnCounter } from './Counter.classname';

import './Counter.scss';

type CounterProps = {
    type?: 'primary' | 'secondary';
    size?: '8' | '12' | '16' | '20' | '24';
    stroke?: boolean;
    quantity?: string;
    pulse?: boolean;
};

export const Counter = ({
    type = 'primary',
    size = '8',
    stroke = true,
    quantity,
    pulse = false,
}: CounterProps) => (
    <div
        className={cnCounter({
            type,
            size,
            stroke,
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
