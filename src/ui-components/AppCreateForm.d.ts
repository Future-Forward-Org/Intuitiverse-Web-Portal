/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppCreateFormInputValues = {
    name?: string;
    description?: string;
    buttonName?: string;
};
export declare type AppCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    buttonName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCreateFormOverridesProps = {
    AppCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    buttonName?: PrimitiveOverrideProps<TextFieldProps>;
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
