/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateAccountInputValues = {
    userName?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    avatarUrl?: string;
    email?: string;
};
export declare type CreateAccountValidationValues = {
    userName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    avatarUrl?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateAccountOverridesProps = {
    CreateAccountGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    avatarUrl?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateAccountProps = React.PropsWithChildren<{
    overrides?: CreateAccountOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateAccountInputValues) => CreateAccountInputValues;
    onSuccess?: (fields: CreateAccountInputValues) => void;
    onError?: (fields: CreateAccountInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateAccountInputValues) => CreateAccountInputValues;
    onValidate?: CreateAccountValidationValues;
} & React.CSSProperties>;
export default function CreateAccount(props: CreateAccountProps): React.ReactElement;
