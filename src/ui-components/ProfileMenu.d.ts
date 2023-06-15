/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileMenuOverridesProps = {
    ProfileMenu?: PrimitiveOverrideProps<ViewProps>;
    "Group 3304"?: PrimitiveOverrideProps<ViewProps>;
    singleSelect?: PrimitiveOverrideProps<FlexProps>;
    menu?: PrimitiveOverrideProps<FlexProps>;
    menuOption1?: PrimitiveOverrideProps<FlexProps>;
    inputText3515042?: PrimitiveOverrideProps<TextProps>;
    menuOption2?: PrimitiveOverrideProps<FlexProps>;
    inputText3515046?: PrimitiveOverrideProps<TextProps>;
    menuOption3?: PrimitiveOverrideProps<FlexProps>;
    inputText3515044?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3853"?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ProfileMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileMenuOverridesProps | undefined | null;
}>;
export default function ProfileMenu(props: ProfileMenuProps): React.ReactElement;
