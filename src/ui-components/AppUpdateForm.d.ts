/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { App, User, Task, MagicCode as MagicCode0, Role } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppUpdateFormInputValues = {
    name?: string;
    Users?: User[];
    Tasks?: Task[];
    MagicCode?: MagicCode0;
    description?: string;
    buttonName?: string;
    Roles?: Role[];
};
export declare type AppUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Users?: ValidationFunction<User>;
    Tasks?: ValidationFunction<Task>;
    MagicCode?: ValidationFunction<MagicCode0>;
    description?: ValidationFunction<string>;
    buttonName?: ValidationFunction<string>;
    Roles?: ValidationFunction<Role>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppUpdateFormOverridesProps = {
    AppUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Users?: PrimitiveOverrideProps<AutocompleteProps>;
    Tasks?: PrimitiveOverrideProps<AutocompleteProps>;
    MagicCode?: PrimitiveOverrideProps<AutocompleteProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    buttonName?: PrimitiveOverrideProps<TextFieldProps>;
    Roles?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AppUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    app?: App;
    onSubmit?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onSuccess?: (fields: AppUpdateFormInputValues) => void;
    onError?: (fields: AppUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onValidate?: AppUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppUpdateForm(props: AppUpdateFormProps): React.ReactElement;
