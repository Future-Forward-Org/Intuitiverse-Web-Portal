/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
    userName?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    avatarImageURL?: string;
    avatarUrl?: string;
    email?: string;
    cognitoId?: string;
    avatarKey?: string;
    language?: string;
    sessionID?: string;
};
export declare type UserUpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    avatarImageURL?: ValidationFunction<string>;
    avatarUrl?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    cognitoId?: ValidationFunction<string>;
    avatarKey?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    sessionID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    avatarImageURL?: PrimitiveOverrideProps<TextFieldProps>;
    avatarUrl?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoId?: PrimitiveOverrideProps<TextFieldProps>;
    avatarKey?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    sessionID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
