import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/css/theme";
import { GlobalStyle } from "../src/css/GlobalStyle";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(storyFn => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
    </ThemeProvider>
));
