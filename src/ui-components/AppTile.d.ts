/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { App, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppTileOverridesProps = {
    AppTile?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AppTileProps = React.PropsWithChildren<Partial<FlexProps> & {
    app?: App;
    userID?: String;
    user?: User;
} & {
    visibility?: "disabled" | "enabled";
} & {
    overrides?: AppTileOverridesProps | undefined | null;
}>;
export default function AppTile(props: AppTileProps): React.ReactElement;
