/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskStatus, User as User0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskStatusUpdateFormInputValues = {
    User?: User0;
    Progress?: string;
    taskID?: string;
    isEnabled?: boolean;
};
export declare type TaskStatusUpdateFormValidationValues = {
    User?: ValidationFunction<User0>;
    Progress?: ValidationFunction<string>;
    taskID?: ValidationFunction<string>;
    isEnabled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskStatusUpdateFormOverridesProps = {
    TaskStatusUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<AutocompleteProps>;
    Progress?: PrimitiveOverrideProps<TextFieldProps>;
    taskID?: PrimitiveOverrideProps<AutocompleteProps>;
    isEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TaskStatusUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskStatusUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskStatus?: TaskStatus;
    onSubmit?: (fields: TaskStatusUpdateFormInputValues) => TaskStatusUpdateFormInputValues;
    onSuccess?: (fields: TaskStatusUpdateFormInputValues) => void;
    onError?: (fields: TaskStatusUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskStatusUpdateFormInputValues) => TaskStatusUpdateFormInputValues;
    onValidate?: TaskStatusUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskStatusUpdateForm(props: TaskStatusUpdateFormProps): React.ReactElement;
