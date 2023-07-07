/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Task } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TaskCard from "./TaskCard";
import { Collection } from "@aws-amplify/ui-react";
export default function TaskCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.order(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Task,
    pagination: itemsPagination,
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
          possibleRoles: await item.possibleRoles.toArray(),
          taskStatuses: await item.taskStatuses.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "TaskCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <TaskCard
          width="auto"
          margin="16px 16px 16px 16px"
          task={item}
          taskStatus={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TaskCard>
      )}
    </Collection>
  );
}
