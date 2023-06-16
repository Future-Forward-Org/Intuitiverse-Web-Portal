/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { App, Role, Session } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    userName?: string;
    apps?: App[];
    roles?: Role[];
    sessions?: Session[];
    firstName?: string;
    lastName?: string;
    avatarImageURL?: string;
    avatarUrl?: string;
    email?: string;
    cognitoId?: string;
    avatarKey?: string;
    language?: string;
    avatarUploaded?: boolean;
};
export declare type UserCreateFormValidationValues = {
    userName?: ValidationFunction<string>;
    apps?: ValidationFunction<App>;
    roles?: ValidationFunction<Role>;
    sessions?: ValidationFunction<Session>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    avatarImageURL?: ValidationFunction<string>;
    avatarUrl?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    cognitoId?: ValidationFunction<string>;
    avatarKey?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    avatarUploaded?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    apps?: PrimitiveOverrideProps<AutocompleteProps>;
    roles?: PrimitiveOverrideProps<AutocompleteProps>;
    sessions?: PrimitiveOverrideProps<AutocompleteProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    avatarImageURL?: PrimitiveOverrideProps<TextFieldProps>;
    avatarUrl?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoId?: PrimitiveOverrideProps<TextFieldProps>;
    avatarKey?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    avatarUploaded?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
