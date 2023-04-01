/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Tasks } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCard1OverridesProps = {
    TaskCard1?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Name36513131?: PrimitiveOverrideProps<TextProps>;
    Name36513136?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TaskCard1Props = React.PropsWithChildren<Partial<FlexProps> & {
    tasks?: Tasks;
    userID?: String;
} & {
    overrides?: TaskCard1OverridesProps | undefined | null;
}>;
export default function TaskCard1(props: TaskCard1Props): React.ReactElement;
