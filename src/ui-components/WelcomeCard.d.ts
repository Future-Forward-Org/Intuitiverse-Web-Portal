/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WelcomeCardOverridesProps = {
    WelcomeCard?: PrimitiveOverrideProps<FlexProps>;
    LeftSide?: PrimitiveOverrideProps<FlexProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    "User Info"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WelcomeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    userID?: String;
} & {
    breakpoint?: "base" | "large" | "medium" | "small" | "xl";
} & {
    overrides?: WelcomeCardOverridesProps | undefined | null;
}>;
export default function WelcomeCard(props: WelcomeCardProps): React.ReactElement;
