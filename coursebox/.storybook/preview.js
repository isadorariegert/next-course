import * as NextImage from 'next/image';
import { ThemeProvider, Global } from '@emotion/react';

import { Themes } from '../styles/themes';
import { GlobalStyles } from '../styles/global';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// Context provides global variables (like background)
const withThemeProvider = (Story, context) => {
  const background =
    context.globals.backgrounds?.value || parameters.backgrounds.defaultColor;
  const theme = Object.values(Themes).find(
    (theme) => theme.background === background
  );

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Story {...context} />
    </ThemeProvider>
  );
};

// Another decorator to provides the global styles
const withGlobalStyles = (Story, context) => {
  <>
    <Global styles={GlobalStyles} />
    <Story {...context} />
  </>;
};

export const decorators = [withThemeProvider];

export const parameters = {
  backgrounds: {
    default: 'dark',
    defaultColor: '#5e5c64',
    values: [
      { name: 'dark', value: '#5e5c64' },
      { name: 'light', value: '#e4ebf5' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
