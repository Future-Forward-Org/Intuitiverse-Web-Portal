/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Task, TaskStatus, User, App } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCardOverridesProps = {
    TaskCard?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Name36513131?: PrimitiveOverrideProps<TextProps>;
    Name36513136?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TaskCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    task?: Task;
    taskStatus?: TaskStatus;
    user?: User;
    app?: App;
} & {
    visibility?: "disabled" | "enabled";
} & {
    overrides?: TaskCardOverridesProps | undefined | null;
}>;
export default function TaskCard(props: TaskCardProps): React.ReactElement;
