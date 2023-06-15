/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { AvatarProps } from "./Avatar";
import { HamburgerMenuClosedProps } from "./HamburgerMenuClosed";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    LeftSide?: PrimitiveOverrideProps<FlexProps>;
    HomeButton?: PrimitiveOverrideProps<ButtonProps>;
    RightSide?: PrimitiveOverrideProps<FlexProps>;
    UserName?: PrimitiveOverrideProps<TextProps>;
    Avatar?: AvatarProps;
    LogoutButton?: PrimitiveOverrideProps<ButtonProps>;
    HamburgerMenuClosed?: HamburgerMenuClosedProps;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    rightSide?: React.ReactNode;
} & {
    breakpoint?: "base" | "large" | "medium" | "small" | "xl";
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
