import { default as NextImage } from "next/image";
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

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: props => <NextImage {...props} loader={undefined} unoptimized />,
});

addDecorator(storyFn => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
    </ThemeProvider>
));
