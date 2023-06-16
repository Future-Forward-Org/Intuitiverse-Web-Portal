/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User, Task, MagicCode as MagicCode0, Role } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppCreateFormInputValues = {
    name?: string;
    Users?: User[];
    Tasks?: Task[];
    MagicCode?: MagicCode0;
    description?: string;
    buttonName?: string;
    Roles?: Role[];
};
export declare type AppCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Users?: ValidationFunction<User>;
    Tasks?: ValidationFunction<Task>;
    MagicCode?: ValidationFunction<MagicCode0>;
    description?: ValidationFunction<string>;
    buttonName?: ValidationFunction<string>;
    Roles?: ValidationFunction<Role>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCreateFormOverridesProps = {
    AppCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Users?: PrimitiveOverrideProps<AutocompleteProps>;
    Tasks?: PrimitiveOverrideProps<AutocompleteProps>;
    MagicCode?: PrimitiveOverrideProps<AutocompleteProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    buttonName?: PrimitiveOverrideProps<TextFieldProps>;
    Roles?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AppCreateFormProps = React.PropsWithChildren<{
    overrides?: AppCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppCreateFormInputValues) => AppCreateFormInputValues;
    onSuccess?: (fields: AppCreateFormInputValues) => void;
    onError?: (fields: AppCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppCreateFormInputValues) => AppCreateFormInputValues;
    onValidate?: AppCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppCreateForm(props: AppCreateFormProps): React.ReactElement;
