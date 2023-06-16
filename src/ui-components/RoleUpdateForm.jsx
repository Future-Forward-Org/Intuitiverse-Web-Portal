/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Role, User, App, UserRole, AppRole } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RoleUpdateForm(props) {
  const {
    id: idProp,
    role: roleModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    displayName: "",
    name: "",
    Users: [],
    appID: "",
    apps: [],
  };
  const [displayName, setDisplayName] = React.useState(
    initialValues.displayName
  );
  const [name, setName] = React.useState(initialValues.name);
  const [Users, setUsers] = React.useState(initialValues.Users);
  const [appID, setAppID] = React.useState(initialValues.appID);
  const [apps, setApps] = React.useState(initialValues.apps);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = roleRecord
      ? {
          ...initialValues,
          ...roleRecord,
          Users: linkedUsers,
          apps: linkedApps,
        }
      : initialValues;
    setDisplayName(cleanValues.displayName);
    setName(cleanValues.name);
    setUsers(cleanValues.Users ?? []);
    setCurrentUsersValue(undefined);
    setCurrentUsersDisplayValue("");
    setAppID(cleanValues.appID);
    setApps(cleanValues.apps ?? []);
    setCurrentAppsValue(undefined);
    setCurrentAppsDisplayValue("");
    setErrors({});
  };
  const [roleRecord, setRoleRecord] = React.useState(roleModelProp);
  const [linkedUsers, setLinkedUsers] = React.useState([]);
  const canUnlinkUsers = false;
  const [linkedApps, setLinkedApps] = React.useState([]);
  const canUnlinkApps = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Role, idProp)
        : roleModelProp;
      setRoleRecord(record);
      const linkedUsers = record
        ? await Promise.all(
            (
              await record.Users.toArray()
            ).map((r) => {
              return r.user;
            })
          )
        : [];
      setLinkedUsers(linkedUsers);
      const linkedApps = record
        ? await Promise.all(
            (
              await record.apps.toArray()
            ).map((r) => {
              return r.app;
            })
          )
        : [];
      setLinkedApps(linkedApps);
    };
    queryData();
  }, [idProp, roleModelProp]);
  React.useEffect(resetStateValues, [roleRecord, linkedUsers, linkedApps]);
  const [currentUsersDisplayValue, setCurrentUsersDisplayValue] =
    React.useState("");
  const [currentUsersValue, setCurrentUsersValue] = React.useState(undefined);
  const UsersRef = React.createRef();
  const [currentAppsDisplayValue, setCurrentAppsDisplayValue] =
    React.useState("");
  const [currentAppsValue, setCurrentAppsValue] = React.useState(undefined);
  const appsRef = React.createRef();
  const getIDValue = {
    Users: (r) => JSON.stringify({ id: r?.id }),
    apps: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersIdSet = new Set(
    Array.isArray(Users)
      ? Users.map((r) => getIDValue.Users?.(r))
      : getIDValue.Users?.(Users)
  );
  const appsIdSet = new Set(
    Array.isArray(apps)
      ? apps.map((r) => getIDValue.apps?.(r))
      : getIDValue.apps?.(apps)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const appRecords = useDataStoreBinding({
    type: "collection",
    model: App,
  }).items;
  const getDisplayValue = {
    Users: (r) => `${r?.userName ? r?.userName + " - " : ""}${r?.id}`,
    apps: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    displayName: [],
    name: [],
    Users: [],
    appID: [{ type: "Required" }],
    apps: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          displayName,
          name,
          Users,
          appID,
          apps,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const promises = [];
          const usersToLinkMap = new Map();
          const usersToUnLinkMap = new Map();
          const usersMap = new Map();
          const linkedUsersMap = new Map();
          Users.forEach((r) => {
            const count = usersMap.get(getIDValue.Users?.(r));
            const newCount = count ? count + 1 : 1;
            usersMap.set(getIDValue.Users?.(r), newCount);
          });
          linkedUsers.forEach((r) => {
            const count = linkedUsersMap.get(getIDValue.Users?.(r));
            const newCount = count ? count + 1 : 1;
            linkedUsersMap.set(getIDValue.Users?.(r), newCount);
          });
          linkedUsersMap.forEach((count, id) => {
            const newCount = usersMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                usersToUnLinkMap.set(id, diffCount);
              }
            } else {
              usersToUnLinkMap.set(id, count);
            }
          });
          usersMap.forEach((count, id) => {
            const originalCount = linkedUsersMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                usersToLinkMap.set(id, diffCount);
              }
            } else {
              usersToLinkMap.set(id, count);
            }
          });
          usersToUnLinkMap.forEach(async (count, id) => {
            const userRoleRecords = await DataStore.query(UserRole, (r) =>
              r.and((r) => {
                const recordKeys = JSON.parse(id);
                return [r.userId.eq(recordKeys.id), r.roleId.eq(roleRecord.id)];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(userRoleRecords[i]));
            }
          });
          usersToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new UserRole({
                    role: roleRecord,
                    user: userRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const appsToLinkMap = new Map();
          const appsToUnLinkMap = new Map();
          const appsMap = new Map();
          const linkedAppsMap = new Map();
          apps.forEach((r) => {
            const count = appsMap.get(getIDValue.apps?.(r));
            const newCount = count ? count + 1 : 1;
            appsMap.set(getIDValue.apps?.(r), newCount);
          });
          linkedApps.forEach((r) => {
            const count = linkedAppsMap.get(getIDValue.apps?.(r));
            const newCount = count ? count + 1 : 1;
            linkedAppsMap.set(getIDValue.apps?.(r), newCount);
          });
          linkedAppsMap.forEach((count, id) => {
            const newCount = appsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                appsToUnLinkMap.set(id, diffCount);
              }
            } else {
              appsToUnLinkMap.set(id, count);
            }
          });
          appsMap.forEach((count, id) => {
            const originalCount = linkedAppsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                appsToLinkMap.set(id, diffCount);
              }
            } else {
              appsToLinkMap.set(id, count);
            }
          });
          appsToUnLinkMap.forEach(async (count, id) => {
            const appRoleRecords = await DataStore.query(AppRole, (r) =>
              r.and((r) => {
                const recordKeys = JSON.parse(id);
                return [r.appId.eq(recordKeys.id), r.roleId.eq(roleRecord.id)];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(appRoleRecords[i]));
            }
          });
          appsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new AppRole({
                    role: roleRecord,
                    app: appRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            displayName: modelFields.displayName,
            name: modelFields.name,
            appID: modelFields.appID,
          };
          promises.push(
            DataStore.save(
              Role.copyOf(roleRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RoleUpdateForm")}
      {...rest}
    >
      <TextField
        label="Display name"
        isRequired={false}
        isReadOnly={false}
        value={displayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName: value,
              name,
              Users,
              appID,
              apps,
            };
            const result = onChange(modelFields);
            value = result?.displayName ?? value;
          }
          if (errors.displayName?.hasError) {
            runValidationTasks("displayName", value);
          }
          setDisplayName(value);
        }}
        onBlur={() => runValidationTasks("displayName", displayName)}
        errorMessage={errors.displayName?.errorMessage}
        hasError={errors.displayName?.hasError}
        {...getOverrideProps(overrides, "displayName")}
      ></TextField>
      <SelectField
        label="Name"
        placeholder="Please select an option"
        isDisabled={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              name: value,
              Users,
              appID,
              apps,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      >
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "nameoption0")}
        ></option>
        <option
          children="Host"
          value="HOST"
          {...getOverrideProps(overrides, "nameoption1")}
        ></option>
        <option
          children="Student"
          value="STUDENT"
          {...getOverrideProps(overrides, "nameoption2")}
        ></option>
        <option
          children="Arcticdryrun"
          value="ARCTICDRYRUN"
          {...getOverrideProps(overrides, "nameoption3")}
        ></option>
        <option
          children="Virtuadcastpilotstudent"
          value="VIRTUADCASTPILOTSTUDENT"
          {...getOverrideProps(overrides, "nameoption4")}
        ></option>
        <option
          children="Virtuadcastpilottrainer"
          value="VIRTUADCASTPILOTTRAINER"
          {...getOverrideProps(overrides, "nameoption5")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              displayName,
              name,
              Users: values,
              appID,
              apps,
            };
            const result = onChange(modelFields);
            values = result?.Users ?? values;
          }
          setUsers(values);
          setCurrentUsersValue(undefined);
          setCurrentUsersDisplayValue("");
        }}
        currentFieldValue={currentUsersValue}
        label={"Users"}
        items={Users}
        hasError={errors?.Users?.hasError}
        errorMessage={errors?.Users?.errorMessage}
        getBadgeText={getDisplayValue.Users}
        setFieldValue={(model) => {
          setCurrentUsersDisplayValue(
            model ? getDisplayValue.Users(model) : ""
          );
          setCurrentUsersValue(model);
        }}
        inputFieldRef={UsersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUsersDisplayValue}
          options={userRecords
            .filter((r) => !UsersIdSet.has(getIDValue.Users?.(r)))
            .map((r) => ({
              id: getIDValue.Users?.(r),
              label: getDisplayValue.Users?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsersDisplayValue(label);
            runValidationTasks("Users", label);
          }}
          onClear={() => {
            setCurrentUsersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Users?.hasError) {
              runValidationTasks("Users", value);
            }
            setCurrentUsersDisplayValue(value);
            setCurrentUsersValue(undefined);
          }}
          onBlur={() => runValidationTasks("Users", currentUsersDisplayValue)}
          errorMessage={errors.Users?.errorMessage}
          hasError={errors.Users?.hasError}
          ref={UsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Users")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="App id"
        isRequired={true}
        isReadOnly={false}
        value={appID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              name,
              Users,
              appID: value,
              apps,
            };
            const result = onChange(modelFields);
            value = result?.appID ?? value;
          }
          if (errors.appID?.hasError) {
            runValidationTasks("appID", value);
          }
          setAppID(value);
        }}
        onBlur={() => runValidationTasks("appID", appID)}
        errorMessage={errors.appID?.errorMessage}
        hasError={errors.appID?.hasError}
        {...getOverrideProps(overrides, "appID")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              displayName,
              name,
              Users,
              appID,
              apps: values,
            };
            const result = onChange(modelFields);
            values = result?.apps ?? values;
          }
          setApps(values);
          setCurrentAppsValue(undefined);
          setCurrentAppsDisplayValue("");
        }}
        currentFieldValue={currentAppsValue}
        label={"Apps"}
        items={apps}
        hasError={errors?.apps?.hasError}
        errorMessage={errors?.apps?.errorMessage}
        getBadgeText={getDisplayValue.apps}
        setFieldValue={(model) => {
          setCurrentAppsDisplayValue(model ? getDisplayValue.apps(model) : "");
          setCurrentAppsValue(model);
        }}
        inputFieldRef={appsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Apps"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search App"
          value={currentAppsDisplayValue}
          options={appRecords
            .filter((r) => !appsIdSet.has(getIDValue.apps?.(r)))
            .map((r) => ({
              id: getIDValue.apps?.(r),
              label: getDisplayValue.apps?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAppsValue(
              appRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAppsDisplayValue(label);
            runValidationTasks("apps", label);
          }}
          onClear={() => {
            setCurrentAppsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.apps?.hasError) {
              runValidationTasks("apps", value);
            }
            setCurrentAppsDisplayValue(value);
            setCurrentAppsValue(undefined);
          }}
          onBlur={() => runValidationTasks("apps", currentAppsDisplayValue)}
          errorMessage={errors.apps?.errorMessage}
          hasError={errors.apps?.hasError}
          ref={appsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "apps")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || roleModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || roleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
