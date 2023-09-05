import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { lightTheme, darkTheme } from "@constants/styles";
import { router } from "./router";
import { AppContainer } from "./parts";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeProvider>
  );
};
