/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MagicCode } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MagicCodeUpdateFormInputValues = {};
export declare type MagicCodeUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MagicCodeUpdateFormOverridesProps = {
    MagicCodeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type MagicCodeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MagicCodeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    magicCode?: MagicCode;
    onSubmit?: (fields: MagicCodeUpdateFormInputValues) => MagicCodeUpdateFormInputValues;
    onSuccess?: (fields: MagicCodeUpdateFormInputValues) => void;
    onError?: (fields: MagicCodeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MagicCodeUpdateFormInputValues) => MagicCodeUpdateFormInputValues;
    onValidate?: MagicCodeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MagicCodeUpdateForm(props: MagicCodeUpdateFormProps): React.ReactElement;
