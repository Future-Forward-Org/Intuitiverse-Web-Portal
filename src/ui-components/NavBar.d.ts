/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Intuitive User Portal"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32136652478"?: PrimitiveOverrideProps<FlexProps>;
    Button36652479?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 32136652488"?: PrimitiveOverrideProps<FlexProps>;
    Button36652489?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    userID?: String;
    signOut?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
