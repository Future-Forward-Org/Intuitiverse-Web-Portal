/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Session, User, SessionUserAttendees } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionCardOverridesProps = {
    SessionCard?: PrimitiveOverrideProps<FlexProps>;
    TitleFrame?: PrimitiveOverrideProps<FlexProps>;
    Name1092751?: PrimitiveOverrideProps<TextProps>;
    Name1092750?: PrimitiveOverrideProps<TextProps>;
    TimeFrame?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    Name1092772?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SessionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    session?: Session;
    sessionTime?: String;
    user?: User;
    attendees?: SessionUserAttendees;
    sessionButton?: (event: SyntheticEvent) => void;
    userID?: String;
    sessionDate?: String;
} & {
    visibility?: "disabled" | "enabled";
} & {
    overrides?: SessionCardOverridesProps | undefined | null;
}>;
export default function SessionCard(props: SessionCardProps): React.ReactElement;
