/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { App, MagicCode } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MagicCodeOverridesProps = {
    MagicCode?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MagicCodeProps = React.PropsWithChildren<Partial<FlexProps> & {
    app?: App;
    magicCode?: MagicCode;
} & {
    overrides?: MagicCodeOverridesProps | undefined | null;
}>;
export default function MagicCode(props: MagicCodeProps): React.ReactElement;
