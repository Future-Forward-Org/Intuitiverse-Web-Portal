/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskCard1Props } from "./TaskCard1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCardsNotStartedOverridesProps = {
    TaskCardsNotStarted?: PrimitiveOverrideProps<CollectionProps>;
    TaskCard1?: TaskCard1Props;
} & EscapeHatchProps;
export declare type TaskCardsNotStartedProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TaskCard1Props;
} & {
    overrides?: TaskCardsNotStartedOverridesProps | undefined | null;
}>;
export default function TaskCardsNotStarted(props: TaskCardsNotStartedProps): React.ReactElement;
