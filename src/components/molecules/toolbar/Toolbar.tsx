import React from 'react';
import { cx, css } from '@emotion/css'
import { Menu } from '../menu/Menu';


export const Toolbar = (props: any) =>
  <Menu
    {...props}
    className={cx(
      css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
    )}
  />

