import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { Themes } from './styles/themes';

interface Props {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const Wrapper: FC<Props> = ({ children }) => (
  <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
