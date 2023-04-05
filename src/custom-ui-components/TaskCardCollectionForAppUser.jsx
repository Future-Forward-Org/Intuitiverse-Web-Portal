/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {Task, TaskStatus} from "../models";
import {
    getOverrideProps,
    useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
import { TaskCard } from "../ui-components";
export default function TaskCardCollectionForAppUser(props) {
    const {userID, appID, items: itemsProp, overrideItems, overrides, ...rest } = props;
    const [items, setItems] = React.useState(undefined);
    const tasksDataStore = useDataStoreBinding({
        type: "collection",
        model: Task,
    }).items;
    const taskStatusDataStore = useDataStoreBinding({
        type: "collection",
        model: TaskStatus,
    }).items;

    const taskStatuses = taskStatusDataStore.filter((item) => item.taskStatusUserId === userID);
    //console.log ("TaskStatuses: " + taskStatuses);

    React.useEffect(() => {
        if (itemsProp !== undefined) {
            setItems(itemsProp);
            return;
        }
        async function setItemsFromDataStore() {

            const tasks = tasksDataStore.filter((item) => item.appID === appID);
            console.log ("Tasks: " + tasks);
            // var loaded = await Promise.all(
            //     tasksDataStore.map(async (item) => ({
            //         ...item,
            //         TaskStatuses: await item.TaskStatuses.toArray(),
            //         Roles: await item.Roles.toArray(),
            //     }))
            // );
            setItems(tasks);
        }
        setItemsFromDataStore();
    }, [itemsProp, tasksDataStore]);
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
                    margin="8px 8px 8px 32px"
                    visibility={item.isEnabled? "enabled" : "disabled"}
                    taskStatus={taskStatuses.find((t) => t.taskID === item.id)}
                    user={item}
                    app={item}
                    key={item.id}
                    {...(overrideItems && overrideItems({ item, index }))}
                ></TaskCard>
            )}
        </Collection>
    );
}
