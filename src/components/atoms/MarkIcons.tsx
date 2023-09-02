import React, { PropsWithChildren } from 'react';
import { cx, css } from '@emotion/css';
import { BaseProps } from '../../types/editor';

export const Icon =
    (
        { className, ...props }: PropsWithChildren<BaseProps>,
    ) => (
        <span
            {...props}
            className={cx(
                'material-icons',
                className,
                css`
          font-size: 25px;
          vertical-align: text-bottom;
        `
            )}
        />
    )
