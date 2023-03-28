/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MagicCodeProps } from "./MagicCode";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WelcomeCardOverridesProps = {
    WelcomeCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    "Welcome, User"?: PrimitiveOverrideProps<TextProps>;
    "This area can be used to display basic information about the purpose of the site and / or information about the user"?: PrimitiveOverrideProps<TextProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    MagicCode?: MagicCodeProps;
} & EscapeHatchProps;
export declare type WelcomeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    userID?: String;
} & {
    overrides?: WelcomeCardOverridesProps | undefined | null;
}>;
export default function WelcomeCard(props: WelcomeCardProps): React.ReactElement;
