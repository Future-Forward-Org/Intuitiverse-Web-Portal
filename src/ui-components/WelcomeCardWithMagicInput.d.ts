/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MagicCodeInputProps } from "./MagicCodeInput";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WelcomeCardWithMagicInputOverridesProps = {
    WelcomeCardWithMagicInput?: PrimitiveOverrideProps<FlexProps>;
    LeftSide?: PrimitiveOverrideProps<FlexProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    "User Info"?: PrimitiveOverrideProps<TextProps>;
    RightSide?: PrimitiveOverrideProps<FlexProps>;
    MagicCodeInput?: MagicCodeInputProps;
} & EscapeHatchProps;
export declare type WelcomeCardWithMagicInputProps = React.PropsWithChildren<Partial<FlexProps> & {
    userID?: String;
} & {
    breakpoint?: "base" | "large" | "medium" | "small" | "xl";
} & {
    overrides?: WelcomeCardWithMagicInputOverridesProps | undefined | null;
}>;
export default function WelcomeCardWithMagicInput(props: WelcomeCardWithMagicInputProps): React.ReactElement;
