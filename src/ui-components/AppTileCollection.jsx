/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { App } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import AppTile from "./AppTile";
import { Collection } from "@aws-amplify/ui-react";
export default function AppTileCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: App,
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
          Tasks: await item.Tasks.toArray(),
          MagicCode: await item.MagicCode,
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
      alignItems="bottom"
      items={items || []}
      {...getOverrideProps(overrides, "AppTileCollection")}
      {...rest}
    >
      {(item, index) => (
        <AppTile
          app={item}
          width="auto"
          margin="8px 8px 8px 8px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></AppTile>
      )}
    </Collection>
  );
}
