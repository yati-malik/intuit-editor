import React, { PropsWithChildren, } from 'react';
import { cx, css } from '@emotion/css';
import { BaseProps } from '../../../types/editor';


export const Button = (
    {
        active,
        ...props
    }: PropsWithChildren<
        {
            active: boolean
        } & BaseProps
    >
) => (
    <span data-testid='span-bt'
        {...props}
        className={cx(
            css`
                cursor: pointer;
                color: ${active
                    ? 'black'
                    : '#ccc'};
        `
        )}
    />
)
