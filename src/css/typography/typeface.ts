import { CSSObject } from "styled-components";

const createTypeface = (
    fontSize: string,
    lineHeight: string | number,
    letterSpacing: string | number
): CSSObject => ({
    fontSize,
    lineHeight,
    letterSpacing,
});

//@todo adjust typefaces
export const typefaces = {
    display2Xl: createTypeface("7.2rem", "8rem", "-0.2rem"),
    displayXl: createTypeface("5.8rem", "6.4rem", "-0.2rem"),
    displayLg: createTypeface("4.8rem", "5.6rem", "-0.15rem"),
    displayMd: createTypeface("3.6rem", "4.4rem", "-0.1rem"),
    displaySm: createTypeface("3rem", "3.8rem", "-0.1rem"),
    displayXs: createTypeface("2.4rem", "3rem", "-0.1rem"),
    textXl: createTypeface("2rem", "2.8rem", "-0.05rem"),
    textLg: createTypeface("1.8rem", "2.6rem", "-0.02rem"),
    textMd: createTypeface("1.6rem", "2.4rem", "-0.02rem"),
    textSm: createTypeface("1.4rem", "2rem", "-0.01rem"),
    textXs: createTypeface("1.2rem", "1.8rem", "-0.01rem"),
    text2Xs: createTypeface("1rem", "1.4rem", "-0.01rem"),
} as const;

export type Typeface = keyof typeof typefaces;
