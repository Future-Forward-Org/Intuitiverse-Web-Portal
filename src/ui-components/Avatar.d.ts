/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarOverridesProps = {
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<IconProps>;
    icon_user?: PrimitiveOverrideProps<ViewProps>;
    icon_fill?: PrimitiveOverrideProps<IconProps>;
    "Fill 2"?: PrimitiveOverrideProps<IconProps>;
    Path3514946?: PrimitiveOverrideProps<IconProps>;
    Path3514947?: PrimitiveOverrideProps<IconProps>;
    "Fill 4"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AvatarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AvatarOverridesProps | undefined | null;
}>;
export default function Avatar(props: AvatarProps): React.ReactElement;
