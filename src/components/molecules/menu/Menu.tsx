import React, { PropsWithChildren } from "react";
import { BaseProps } from "../../../types/editor";
import { cx, css } from '@emotion/css'

export const Menu = ({ className, ...props }: PropsWithChildren<BaseProps>) => {
    return <div
        {...props}
        data-test-id="menu"
        className={cx(
            className,
            css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
        )}
    />
}
