import {useEffect, useState} from "react";
import {DataStore, Hub} from "aws-amplify";
import {User} from "./models";
export function SyncDataStore() {
    const [isSyncComplete, setSyncComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await DataStore.start();
            } catch (e) {
                console.warn(e);
            } finally {
                const removeListener = Hub.listen("datastore", async (data) => {
                    const { payload } = data;
                    if (payload.event === "ready") {
                        // console.log('READY', payload)
                        // const users = await DataStore.query(User)
                        // console.log('users after sync', users)
                        setSyncComplete(true)
                        removeListener();
                    }
                });
            }
        }
        loadResourcesAndDataAsync();
    }, []);
    return isSyncComplete;
}