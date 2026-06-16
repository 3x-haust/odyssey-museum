import 'styled-components';
import type { AppTheme } from './styles/theme';

declare module 'styled-components' {
  // Make the theme strongly typed everywhere styled-components is used.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
