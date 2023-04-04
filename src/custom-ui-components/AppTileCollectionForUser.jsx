/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { DataStore } from "aws-amplify";
import * as React from "react";
import { User, App } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import AppTile from "./AppTile";
import { Collection } from "@aws-amplify/ui-react";
export default function AppTileCollectionForUser(props) {
  const { userID, items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const itemsDataStore2 = useDataStoreBinding({
    type: "collection",
    model: App,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore(userID) {
      const user = await DataStore.query(User, userID);
      console.log(user);

      const appUsers = await user.Apps.toArray();
      console.log(appUsers);
      
      // const userapps = appUsers.map((p) => p.appId);
      // console.log (userapps);

      const allApps = await DataStore.query(App);
      console.log (allApps);

      const myapps = allApps.filter((item) => appUsers.map((p) => p.appId).includes(item.id));
      console.log (myapps);

      var loaded = await Promise.all(
        itemsDataStore2.map(async (item) => ({
          ...item,
          Tasks: await item.Tasks.toArray(),
          MagicCode: await item.MagicCode,
        }))
      );
      console.log ("Loaded: "+ loaded);
      setItems(myapps);
    }
    setItemsFromDataStore(userID);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "AppTileCollection")}
      {...rest}
    >
      {(item, index) => (
        <AppTile
          app={item}
          width="auto"
          margin="16px 16px 16px 16px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></AppTile>
      )}
    </Collection>
  );
}
