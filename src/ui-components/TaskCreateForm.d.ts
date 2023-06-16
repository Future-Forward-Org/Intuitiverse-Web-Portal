/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskStatus } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskCreateFormInputValues = {
    type?: string;
    name?: string;
    buttonName?: string;
    requiredRole?: string[];
    url?: string;
    order?: number;
    taskBehavior?: string;
    appendUserID?: boolean;
    appendTaskID?: boolean;
    appID?: string;
    taskStatuses?: TaskStatus[];
};
export declare type TaskCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    buttonName?: ValidationFunction<string>;
    requiredRole?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    order?: ValidationFunction<number>;
    taskBehavior?: ValidationFunction<string>;
    appendUserID?: ValidationFunction<boolean>;
    appendTaskID?: ValidationFunction<boolean>;
    appID?: ValidationFunction<string>;
    taskStatuses?: ValidationFunction<TaskStatus>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCreateFormOverridesProps = {
    TaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    buttonName?: PrimitiveOverrideProps<TextFieldProps>;
    requiredRole?: PrimitiveOverrideProps<SelectFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    taskBehavior?: PrimitiveOverrideProps<SelectFieldProps>;
    appendUserID?: PrimitiveOverrideProps<SwitchFieldProps>;
    appendTaskID?: PrimitiveOverrideProps<SwitchFieldProps>;
    appID?: PrimitiveOverrideProps<AutocompleteProps>;
    taskStatuses?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskCreateFormInputValues) => TaskCreateFormInputValues;
    onSuccess?: (fields: TaskCreateFormInputValues) => void;
    onError?: (fields: TaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskCreateFormInputValues) => TaskCreateFormInputValues;
    onValidate?: TaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskCreateForm(props: TaskCreateFormProps): React.ReactElement;
