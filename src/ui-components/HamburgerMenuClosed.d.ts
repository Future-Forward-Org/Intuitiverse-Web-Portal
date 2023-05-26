/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HamburgerMenuClosedOverridesProps = {
    HamburgerMenuClosed?: PrimitiveOverrideProps<ViewProps>;
    "Frame 420"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HamburgerMenuClosedProps = React.PropsWithChildren<Partial<ViewProps> & {
    HamburgerClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HamburgerMenuClosedOverridesProps | undefined | null;
}>;
export default function HamburgerMenuClosed(props: HamburgerMenuClosedProps): React.ReactElement;
