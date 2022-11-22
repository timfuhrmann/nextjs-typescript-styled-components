import { css } from "styled-components";
import { Typeface, typefaces } from "@css/typography/typeface";

//@todo adjust font weights
const fontWeights = {
    regular: 400,
    semiBold: 600,
    bold: 700
} as const;

type FontWeight = keyof typeof fontWeights;

export const flowText = (typeface: Typeface, fontWeight: FontWeight = "regular") => css`
    ${typefaces[typeface]};
    font-weight: ${fontWeights[fontWeight]};
`;

export const text = (typeface: Typeface, fontWeight: FontWeight = "regular") => css`
    ${flowText(typeface, fontWeight)};
    line-height: normal;
`;
