"use client";
import { ReactNode, useMemo } from "react";
// @mui
import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
// ----------------------------------------------------------------------
import palette from "./foundations/palette";
import GlobalStyles from "./globalStyles";
import typography from "./foundations/typography";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeOptions = useMemo(
    () =>
      ({
        palette,
        typography,
        shape: { borderRadius: 6 },
      } as ThemeOptions),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
