/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AppTileProps } from "./AppTile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppTileCollectionOverridesProps = {
    AppTileCollection?: PrimitiveOverrideProps<CollectionProps>;
    AppTile?: AppTileProps;
} & EscapeHatchProps;
export declare type AppTileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AppTileProps;
} & {
    overrides?: AppTileCollectionOverridesProps | undefined | null;
}>;
export default function AppTileCollection(props: AppTileCollectionProps): React.ReactElement;
