/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { App, MagicCode } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MagicCodeInputProps } from "./MagicCodeInput";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentAppOverridesProps = {
    CurrentApp?: PrimitiveOverrideProps<FlexProps>;
    LeftSide?: PrimitiveOverrideProps<FlexProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    "Current App"?: PrimitiveOverrideProps<TextProps>;
    "Current App Description"?: PrimitiveOverrideProps<TextProps>;
    RightSide?: PrimitiveOverrideProps<FlexProps>;
    MagicCodeInput?: MagicCodeInputProps;
} & EscapeHatchProps;
export declare type CurrentAppProps = React.PropsWithChildren<Partial<FlexProps> & {
    app?: App;
    appID?: String;
    magicCode?: MagicCode;
    rightSide?: React.ReactNode;
} & {
    breakpoint?: "base" | "large" | "medium" | "small" | "xl";
} & {
    overrides?: CurrentAppOverridesProps | undefined | null;
}>;
export default function CurrentApp(props: CurrentAppProps): React.ReactElement;
