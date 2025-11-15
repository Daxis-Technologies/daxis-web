import "styled-components";
import type { darkTheme, lightTheme } from "../hooks/useThemeController";

type ThemeType = typeof lightTheme & typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
