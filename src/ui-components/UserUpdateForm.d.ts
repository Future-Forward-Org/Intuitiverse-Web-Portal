/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User, App, Role, Session } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
    userName?: string;
    firstName?: string;
    lastName?: string;
    language?: string;
    avatarUrl?: string;
    apps?: App[];
    roles?: Role[];
    sessions?: Session[];
};
export declare type UserUpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    avatarUrl?: ValidationFunction<string>;
    apps?: ValidationFunction<App>;
    roles?: ValidationFunction<Role>;
    sessions?: ValidationFunction<Session>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    avatarUrl?: PrimitiveOverrideProps<TextFieldProps>;
    apps?: PrimitiveOverrideProps<AutocompleteProps>;
    roles?: PrimitiveOverrideProps<AutocompleteProps>;
    sessions?: PrimitiveOverrideProps<AutocompleteProps>;
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
