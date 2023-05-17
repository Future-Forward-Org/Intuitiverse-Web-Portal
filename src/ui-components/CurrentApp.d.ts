/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { App } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentAppOverridesProps = {
    CurrentApp?: PrimitiveOverrideProps<FlexProps>;
    LeftSide?: PrimitiveOverrideProps<FlexProps>;
    "Current App"?: PrimitiveOverrideProps<TextProps>;
    "Current App Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CurrentAppProps = React.PropsWithChildren<Partial<FlexProps> & {
    app?: App;
} & {
    breakpoint?: "base" | "large" | "medium" | "small" | "xl";
} & {
    overrides?: CurrentAppOverridesProps | undefined | null;
}>;
export default function CurrentApp(props: CurrentAppProps): React.ReactElement;
