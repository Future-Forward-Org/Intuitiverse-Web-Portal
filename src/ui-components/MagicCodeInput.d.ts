/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MagicCode } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MagicCodeInputOverridesProps = {
    MagicCodeInput?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MagicCodeInputProps = React.PropsWithChildren<Partial<FlexProps> & {
    magicCode?: MagicCode;
} & {
    overrides?: MagicCodeInputOverridesProps | undefined | null;
}>;
export default function MagicCodeInput(props: MagicCodeInputProps): React.ReactElement;
