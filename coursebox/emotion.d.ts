// File to restore compatibility between typescript and emotion
import '@emotion/react';

import { AppTheme } from './styles/themes';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
