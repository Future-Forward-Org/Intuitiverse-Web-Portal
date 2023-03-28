/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Tasks } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TaskCard1 from "./TaskCard1";
import { Collection } from "@aws-amplify/ui-react";
export default function TaskCard1Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Tasks,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="center"
      items={items || []}
      {...getOverrideProps(overrides, "TaskCard1Collection")}
      {...rest}
    >
      {(item, index) => (
        <TaskCard1
          tasks={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TaskCard1>
      )}
    </Collection>
  );
}
