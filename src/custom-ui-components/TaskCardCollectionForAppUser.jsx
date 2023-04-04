/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Task } from "../models";
import {
    getOverrideProps,
    useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TaskCard from "./TaskCard";
import { Collection } from "@aws-amplify/ui-react";
export default function TaskCardCollectionForAppUser(props) {
    const { items: itemsProp, overrideItems, overrides, ...rest } = props;
    const [items, setItems] = React.useState(undefined);
    const itemsDataStore = useDataStoreBinding({
        type: "collection",
        model: Task,
    }).items;
    React.useEffect(() => {
        if (itemsProp !== undefined) {
            setItems(itemsProp);
            return;
        }
        async function setItemsFromDataStore() {
            var loaded = await Promise.all(
                itemsDataStore.map(async (item) => ({
                    ...item,
                    TaskStatuses: await item.TaskStatuses.toArray(),
                    Roles: await item.Roles.toArray(),
                }))
            );
            setItems(loaded);
        }
        setItemsFromDataStore();
    }, [itemsProp, itemsDataStore]);
    return (
        <Collection
            type="list"
            searchPlaceholder="Search..."
            direction="row"
            alignItems="stretch"
            items={items || []}
            {...getOverrideProps(overrides, "TaskCardCollection")}
            {...rest}
        >
            {(item, index) => (
                <TaskCard
                    task={item}
                    width="auto"
                    margin="16px 16px 16px 16px"
                    taskStatus={item}
                    user={item}
                    app={item}
                    key={item.id}
                    {...(overrideItems && overrideItems({ item, index }))}
                ></TaskCard>
            )}
        </Collection>
    );
}
