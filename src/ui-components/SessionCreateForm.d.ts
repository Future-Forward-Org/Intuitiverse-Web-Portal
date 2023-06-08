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
export declare type SessionCreateFormInputValues = {
    name?: string;
    description?: string;
    startDateTime?: string;
    endDateTime?: string;
    sessionCode?: string;
    host?: string;
    attendees?: string[];
};
export declare type SessionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    startDateTime?: ValidationFunction<string>;
    endDateTime?: ValidationFunction<string>;
    sessionCode?: ValidationFunction<string>;
    host?: ValidationFunction<string>;
    attendees?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionCreateFormOverridesProps = {
    SessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    startDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    endDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    sessionCode?: PrimitiveOverrideProps<TextFieldProps>;
    host?: PrimitiveOverrideProps<TextFieldProps>;
    attendees?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionCreateFormProps = React.PropsWithChildren<{
    overrides?: SessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onSuccess?: (fields: SessionCreateFormInputValues) => void;
    onError?: (fields: SessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onValidate?: SessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SessionCreateForm(props: SessionCreateFormProps): React.ReactElement;
