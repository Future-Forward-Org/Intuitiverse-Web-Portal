/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskStatusCreateFormInputValues = {
    user?: User;
    Progress?: string;
    taskID?: string;
    isEnabled?: boolean;
};
export declare type TaskStatusCreateFormValidationValues = {
    user?: ValidationFunction<User>;
    Progress?: ValidationFunction<string>;
    taskID?: ValidationFunction<string>;
    isEnabled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskStatusCreateFormOverridesProps = {
    TaskStatusCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    Progress?: PrimitiveOverrideProps<TextFieldProps>;
    taskID?: PrimitiveOverrideProps<AutocompleteProps>;
    isEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TaskStatusCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskStatusCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskStatusCreateFormInputValues) => TaskStatusCreateFormInputValues;
    onSuccess?: (fields: TaskStatusCreateFormInputValues) => void;
    onError?: (fields: TaskStatusCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskStatusCreateFormInputValues) => TaskStatusCreateFormInputValues;
    onValidate?: TaskStatusCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskStatusCreateForm(props: TaskStatusCreateFormProps): React.ReactElement;
