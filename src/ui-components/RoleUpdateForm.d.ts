/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Role } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoleUpdateFormInputValues = {
    displayName?: string;
    name?: string;
};
export declare type RoleUpdateFormValidationValues = {
    displayName?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleUpdateFormOverridesProps = {
    RoleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RoleUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    role?: Role;
    onSubmit?: (fields: RoleUpdateFormInputValues) => RoleUpdateFormInputValues;
    onSuccess?: (fields: RoleUpdateFormInputValues) => void;
    onError?: (fields: RoleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleUpdateFormInputValues) => RoleUpdateFormInputValues;
    onValidate?: RoleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoleUpdateForm(props: RoleUpdateFormProps): React.ReactElement;
