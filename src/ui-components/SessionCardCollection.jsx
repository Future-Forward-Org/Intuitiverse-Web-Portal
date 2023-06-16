/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Session } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SessionCard from "./SessionCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SessionCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.startDateTime(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Session,
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
          host: await item.host,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SessionCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <SessionCard
          session={item}
          width="auto"
          margin="8px 8px 8px 8px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SessionCard>
      )}
    </Collection>
  );
}
