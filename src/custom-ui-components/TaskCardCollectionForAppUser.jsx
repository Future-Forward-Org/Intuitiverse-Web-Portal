/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {Role, Task, TaskStatus, UserRole} from "../models";
import {
    getOverrideProps,
    useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {Collection, Flex} from "@aws-amplify/ui-react";
import { TaskCard } from "../ui-components";
import {TaskCardWithDataStore} from "./index";
import {DataStore} from "aws-amplify";
import {Skeleton} from "@mui/material";
export default function TaskCardCollectionForAppUser(props) {
    const {userID, appID, items: itemsProp, overrideItems, overrides, ...rest } = props;
    const [items, setItems] = React.useState(undefined);
    const [itemsStatus, setItemsStatus] = React.useState(undefined);
    const tasksDataStore = useDataStoreBinding({
        type: "collection",
        model: Task,
    }).items;
    const taskStatusDataStore = useDataStoreBinding({
        type: "collection",
        model: TaskStatus,
    }).items;
    const userRoleDataStore = useDataStoreBinding({
        type: "collection",
        model: UserRole,
    }).items;
    const roleDataStore = useDataStoreBinding({
        type: "collection",
        model: Role,
    }).items;

    const userRoles = userRoleDataStore.filter((item) => item.userId === userID);
    const userRoleIds = userRoles.map((item) => item.roleId);
    console.log ("userId: " + userID);
    const userRoleIds2 = roleDataStore.filter((item) =>  userRoleIds.includes(item.id));
    const userRoleIds3 = userRoleIds2.map((item) => item.name);

    let taskStatuses = taskStatusDataStore.filter((item) => item.taskStatusUserId === userID);
    console.log ("userRoles: " + userRoleIds3);
    //console.log ("taskStatuses: " + taskStatuses.length);


    React.useEffect(() => {
        if (itemsProp !== undefined) {
            setItems(itemsProp);
            return;
        }

        async function setItemsFromDataStore() {

            const tasks = tasksDataStore.filter((item) => item.appID === appID && item.requiredRole.some(r=> userRoleIds3.includes(r)));
//
           // const taskStatuses = taskStatusDataStore.filter((item) => item.taskStatusUserId === userID);

            //console.log ("taskStatuses: " + taskStatuses.length);
            //console.log("test:------------------------- " + taskStatuses.find((t) => t.taskID === "d7cdbe41-943f-4a1f-aaca-58b974d6f2a3")?.Progress)
            console.log ("Tasks: " + tasks.toString());
            // var loaded = await Promise.all(
            //     tasksDataStore.map(async (item) => ({
            //         ...item,
            //         TaskStatuses: await item.TaskStatuses.toArray(),
            //         Roles: await item.Roles.toArray(),
            //     }))
            // );
            setItems(tasks);
            //setItemsStatus(taskStatuses);
        }
        setItemsFromDataStore();

        const subscription = DataStore.observeQuery(TaskStatus,
            _taskStatus => _taskStatus.and(p => [
                p.Progress.contains("")
            ])).subscribe((snapshot) => {
            const { items, isSynced } = snapshot;
            //console.log(items.length);

        });

        return () => subscription.unsubscribe();


    }, [itemsProp, tasksDataStore, taskStatusDataStore, userRoleDataStore, roleDataStore]);
    return (
        <div>

            {taskStatuses == null || taskStatuses.length === 0 ? (
                <Flex direction="row" margin="8px 8px 32px 32px">
                    <Skeleton variant="box" width={150} height={150} />
                </Flex>
            ) : (
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
                <TaskCardWithDataStore
                    task={item}
                    width="auto"
                    margin="8px 8px 8px 32px"
                    //visibility={item.isEnabled? "enabled" : "disabled"}
                    //visibility={"enabled"}
                    visibility={taskStatuses.find((t) => t.taskID === item.id)?.isEnabled? "Enabled" : "Disabled"}
                    taskStatus={taskStatuses.find((t) => t.taskID === item.id).toString()}
                    key={item.id}
                    {...(overrideItems && overrideItems({ item, index }))}
                ></TaskCardWithDataStore>
            )}
        </Collection>
    )}
</div>)
}
