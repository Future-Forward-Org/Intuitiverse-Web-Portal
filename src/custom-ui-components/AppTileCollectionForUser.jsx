/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {App, User, AppUser} from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
import {AppTile} from "../ui-components";
export default function AppTileCollectionForUser(props) {
  const {userID, items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: App,
  }).items;
  const usersDataStore = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const appUsersDataStore = useDataStoreBinding({
    type: "collection",
    model: AppUser,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore(userID) {
      // //console.log ("users: " + usersDataStore);
      // //console.log ("apps: " + itemsDataStore);
      // const currentUser = usersDataStore.find((u) => u.id === userID);
      // //console.log ("Current User: " + currentUser.id);
      // // const appUsers = await currentUser.Apps.toArray();

      //Get items of users and apps relationships
      const appUsers = appUsersDataStore.filter((item) => item.userId === userID);
      const appIDs = appUsers.map((item) => item.appId);
      const apps = itemsDataStore.filter((item) => appIDs.includes(item.id));

      // var loaded = await Promise.all(
      //     itemsDataStore.map(async (item) => ({
      //       ...item,
      //       Tasks: await item.Tasks.toArray(),
      //       MagicCode: await item.MagicCode,
      //       Roles: await item.Roles.toArray(),
      //     }))
      // );
      setItems(apps);
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
                width="auto"
                margin="16px 16px 16px 32px"
                visibility={item.isEnabled? "enabled" : "disabled"}
                app={item}
                key={item.id}
                {...(overrideItems && overrideItems({ item, index }))}
            ></AppTile>
        )}
      </Collection>
  );
}
