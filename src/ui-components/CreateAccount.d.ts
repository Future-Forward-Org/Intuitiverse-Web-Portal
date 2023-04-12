/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    Required?: {
        emailAddress?: string;
        password?: string;
        confirmPassword?: string;
    };
    Optional?: {
        firstName?: string;
        lastName?: string;
        gender?: string;
        avatarURL?: string;
        role?: string;
    };
};
export declare type CreateAccountValidationValues = {
    userName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    avatarUrl?: ValidationFunction<string>;
    Required?: {
        emailAddress?: ValidationFunction<string>;
        password?: ValidationFunction<string>;
        confirmPassword?: ValidationFunction<string>;
    };
    Optional?: {
        firstName?: ValidationFunction<string>;
        lastName?: ValidationFunction<string>;
        gender?: ValidationFunction<string>;
        avatarURL?: ValidationFunction<string>;
        role?: ValidationFunction<string>;
    };
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateAccountOverridesProps = {
    CreateAccountGrid?: PrimitiveOverrideProps<GridProps>;
    Required?: PrimitiveOverrideProps<HeadingProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    avatarUrl?: PrimitiveOverrideProps<TextFieldProps>;
    "Required.emailAddress"?: PrimitiveOverrideProps<TextFieldProps>;
    "Required.password"?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Required.confirmPassword"?: PrimitiveOverrideProps<PasswordFieldProps>;
    Optional?: PrimitiveOverrideProps<HeadingProps>;
    "Optional.firstName"?: PrimitiveOverrideProps<TextFieldProps>;
    "Optional.lastName"?: PrimitiveOverrideProps<TextFieldProps>;
    "Optional.gender"?: PrimitiveOverrideProps<TextFieldProps>;
    "Optional.avatarURL"?: PrimitiveOverrideProps<TextFieldProps>;
    "Optional.role"?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateAccountProps = React.PropsWithChildren<{
    overrides?: CreateAccountOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateAccountInputValues) => CreateAccountInputValues;
    onSuccess?: (fields: CreateAccountInputValues) => void;
    onError?: (fields: CreateAccountInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateAccountInputValues) => CreateAccountInputValues;
    onValidate?: CreateAccountValidationValues;
} & React.CSSProperties>;
export default function CreateAccount(props: CreateAccountProps): React.ReactElement;
