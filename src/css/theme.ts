import { bp, breakpoints } from "@css/helper/breakpoints";
import { zIndex } from "@css/helper/hierarchy";

//@todo adjust theme
export const theme = {
    //region Color
    gray50: "#ffffff",
    gray75: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eaeaea",
    gray300: "#e1e1e1",
    gray400: "#cacaca",
    gray500: "#b3b3b3",
    gray600: "#8e8e8e",
    gray700: "#6e6e6e",
    gray800: "#4b4b4b",
    gray900: "#2c2c2c",
    //endregion

    //region Breakpoints
    bp,
    breakpoints: breakpoints(),
    //endregion

    //region Content Width
    contentWidth: {
        intrinsic: "calc(100vw - 3.2rem)",
        s: "calc(100vw - 3.2rem)",
        m: "calc(100vw - 12rem)",
        l: "calc(100vw - 12rem)",
        xl: "calc(100vw - 19rem)",
        xxl: "125rem",
    },
    //endregion

    //region Hierarchy
    zIndex,
    //endregion
};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
