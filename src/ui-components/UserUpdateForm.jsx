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
  Heading,
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
import {
  User,
  App,
  Role,
  Session,
  AppUser,
  UserRole,
  SessionUserAttendees,
} from "../models";
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
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    language: "",
    avatarUrl: "",
    apps: [],
    roles: [],
    sessions: [],
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [avatarUrl, setAvatarUrl] = React.useState(initialValues.avatarUrl);
  const [apps, setApps] = React.useState(initialValues.apps);
  const [roles, setRoles] = React.useState(initialValues.roles);
  const [sessions, setSessions] = React.useState(initialValues.sessions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? {
          ...initialValues,
          ...userRecord,
          apps: linkedApps,
          roles: linkedRoles,
          sessions: linkedSessions,
        }
      : initialValues;
    setUserName(cleanValues.userName);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setLanguage(cleanValues.language);
    setAvatarUrl(cleanValues.avatarUrl);
    setApps(cleanValues.apps ?? []);
    setCurrentAppsValue(undefined);
    setCurrentAppsDisplayValue("");
    setRoles(cleanValues.roles ?? []);
    setCurrentRolesValue(undefined);
    setCurrentRolesDisplayValue("");
    setSessions(cleanValues.sessions ?? []);
    setCurrentSessionsValue(undefined);
    setCurrentSessionsDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  const [linkedApps, setLinkedApps] = React.useState([]);
  const canUnlinkApps = false;
  const [linkedRoles, setLinkedRoles] = React.useState([]);
  const canUnlinkRoles = false;
  const [linkedSessions, setLinkedSessions] = React.useState([]);
  const canUnlinkSessions = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
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
      const linkedRoles = record
        ? await Promise.all(
            (
              await record.roles.toArray()
            ).map((r) => {
              return r.role;
            })
          )
        : [];
      setLinkedRoles(linkedRoles);
      const linkedSessions = record
        ? await Promise.all(
            (
              await record.sessions.toArray()
            ).map((r) => {
              return r.session;
            })
          )
        : [];
      setLinkedSessions(linkedSessions);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [
    userRecord,
    linkedApps,
    linkedRoles,
    linkedSessions,
  ]);
  const [currentAppsDisplayValue, setCurrentAppsDisplayValue] =
    React.useState("");
  const [currentAppsValue, setCurrentAppsValue] = React.useState(undefined);
  const appsRef = React.createRef();
  const [currentRolesDisplayValue, setCurrentRolesDisplayValue] =
    React.useState("");
  const [currentRolesValue, setCurrentRolesValue] = React.useState(undefined);
  const rolesRef = React.createRef();
  const [currentSessionsDisplayValue, setCurrentSessionsDisplayValue] =
    React.useState("");
  const [currentSessionsValue, setCurrentSessionsValue] =
    React.useState(undefined);
  const sessionsRef = React.createRef();
  const getIDValue = {
    apps: (r) => JSON.stringify({ id: r?.id }),
    roles: (r) => JSON.stringify({ id: r?.id }),
    sessions: (r) => JSON.stringify({ id: r?.id }),
  };
  const appsIdSet = new Set(
    Array.isArray(apps)
      ? apps.map((r) => getIDValue.apps?.(r))
      : getIDValue.apps?.(apps)
  );
  const rolesIdSet = new Set(
    Array.isArray(roles)
      ? roles.map((r) => getIDValue.roles?.(r))
      : getIDValue.roles?.(roles)
  );
  const sessionsIdSet = new Set(
    Array.isArray(sessions)
      ? sessions.map((r) => getIDValue.sessions?.(r))
      : getIDValue.sessions?.(sessions)
  );
  const appRecords = useDataStoreBinding({
    type: "collection",
    model: App,
  }).items;
  const roleRecords = useDataStoreBinding({
    type: "collection",
    model: Role,
  }).items;
  const sessionRecords = useDataStoreBinding({
    type: "collection",
    model: Session,
  }).items;
  const getDisplayValue = {
    apps: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    roles: (r) => `${r?.displayName ? r?.displayName + " - " : ""}${r?.id}`,
    sessions: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    userName: [],
    firstName: [],
    lastName: [],
    language: [{ type: "Required" }],
    avatarUrl: [],
    apps: [],
    roles: [],
    sessions: [],
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
          userName,
          firstName,
          lastName,
          language,
          avatarUrl,
          apps,
          roles,
          sessions,
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
            const appUserRecords = await DataStore.query(AppUser, (r) =>
              r.and((r) => {
                const recordKeys = JSON.parse(id);
                return [r.appId.eq(recordKeys.id), r.userId.eq(userRecord.id)];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(appUserRecords[i]));
            }
          });
          appsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new AppUser({
                    user: userRecord,
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
          const rolesToLinkMap = new Map();
          const rolesToUnLinkMap = new Map();
          const rolesMap = new Map();
          const linkedRolesMap = new Map();
          roles.forEach((r) => {
            const count = rolesMap.get(getIDValue.roles?.(r));
            const newCount = count ? count + 1 : 1;
            rolesMap.set(getIDValue.roles?.(r), newCount);
          });
          linkedRoles.forEach((r) => {
            const count = linkedRolesMap.get(getIDValue.roles?.(r));
            const newCount = count ? count + 1 : 1;
            linkedRolesMap.set(getIDValue.roles?.(r), newCount);
          });
          linkedRolesMap.forEach((count, id) => {
            const newCount = rolesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                rolesToUnLinkMap.set(id, diffCount);
              }
            } else {
              rolesToUnLinkMap.set(id, count);
            }
          });
          rolesMap.forEach((count, id) => {
            const originalCount = linkedRolesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                rolesToLinkMap.set(id, diffCount);
              }
            } else {
              rolesToLinkMap.set(id, count);
            }
          });
          rolesToUnLinkMap.forEach(async (count, id) => {
            const userRoleRecords = await DataStore.query(UserRole, (r) =>
              r.and((r) => {
                const recordKeys = JSON.parse(id);
                return [r.roleId.eq(recordKeys.id), r.userId.eq(userRecord.id)];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(userRoleRecords[i]));
            }
          });
          rolesToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new UserRole({
                    user: userRecord,
                    role: roleRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const sessionsToLinkMap = new Map();
          const sessionsToUnLinkMap = new Map();
          const sessionsMap = new Map();
          const linkedSessionsMap = new Map();
          sessions.forEach((r) => {
            const count = sessionsMap.get(getIDValue.sessions?.(r));
            const newCount = count ? count + 1 : 1;
            sessionsMap.set(getIDValue.sessions?.(r), newCount);
          });
          linkedSessions.forEach((r) => {
            const count = linkedSessionsMap.get(getIDValue.sessions?.(r));
            const newCount = count ? count + 1 : 1;
            linkedSessionsMap.set(getIDValue.sessions?.(r), newCount);
          });
          linkedSessionsMap.forEach((count, id) => {
            const newCount = sessionsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                sessionsToUnLinkMap.set(id, diffCount);
              }
            } else {
              sessionsToUnLinkMap.set(id, count);
            }
          });
          sessionsMap.forEach((count, id) => {
            const originalCount = linkedSessionsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                sessionsToLinkMap.set(id, diffCount);
              }
            } else {
              sessionsToLinkMap.set(id, count);
            }
          });
          sessionsToUnLinkMap.forEach(async (count, id) => {
            const sessionUserAttendeesRecords = await DataStore.query(
              SessionUserAttendees,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.sessionId.eq(recordKeys.id),
                    r.userId.eq(userRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(sessionUserAttendeesRecords[i]));
            }
          });
          sessionsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new SessionUserAttendees({
                    user: userRecord,
                    session: sessionRecords.find((r) =>
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
            userName: modelFields.userName,
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            language: modelFields.language,
            avatarUrl: modelFields.avatarUrl,
          };
          promises.push(
            DataStore.save(
              User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName: value,
              firstName,
              lastName,
              language,
              avatarUrl,
              apps,
              roles,
              sessions,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName: value,
              lastName,
              language,
              avatarUrl,
              apps,
              roles,
              sessions,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName: value,
              language,
              avatarUrl,
              apps,
              roles,
              sessions,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SelectField
        label="Language"
        placeholder="Please select an option"
        isDisabled={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language: value,
              avatarUrl,
              apps,
              roles,
              sessions,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      >
        <option
          children="Chinese"
          value="CHINESE"
          {...getOverrideProps(overrides, "languageoption0")}
        ></option>
        <option
          children="Danish"
          value="DANISH"
          {...getOverrideProps(overrides, "languageoption1")}
        ></option>
        <option
          children="Dutch"
          value="DUTCH"
          {...getOverrideProps(overrides, "languageoption2")}
        ></option>
        <option
          children="English"
          value="ENGLISH"
          {...getOverrideProps(overrides, "languageoption3")}
        ></option>
        <option
          children="Finnish"
          value="FINNISH"
          {...getOverrideProps(overrides, "languageoption4")}
        ></option>
        <option
          children="French"
          value="FRENCH"
          {...getOverrideProps(overrides, "languageoption5")}
        ></option>
        <option
          children="German"
          value="GERMAN"
          {...getOverrideProps(overrides, "languageoption6")}
        ></option>
        <option
          children="Spanish"
          value="SPANISH"
          {...getOverrideProps(overrides, "languageoption7")}
        ></option>
        <option
          children="Japanese"
          value="JAPANESE"
          {...getOverrideProps(overrides, "languageoption8")}
        ></option>
        <option
          children="Norwegian"
          value="NORWEGIAN"
          {...getOverrideProps(overrides, "languageoption9")}
        ></option>
        <option
          children="Portuguese"
          value="PORTUGUESE"
          {...getOverrideProps(overrides, "languageoption10")}
        ></option>
        <option
          children="Brazilian portuguese"
          value="BRAZILIAN_PORTUGUESE"
          {...getOverrideProps(overrides, "languageoption11")}
        ></option>
        <option
          children="Swedish"
          value="SWEDISH"
          {...getOverrideProps(overrides, "languageoption12")}
        ></option>
        <option
          children="Italian"
          value="ITALIAN"
          {...getOverrideProps(overrides, "languageoption13")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        children="Create your avatar at"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Heading
        children="https://demo.readyplayer.me/en/avatar"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="Avatar url"
        isRequired={false}
        isReadOnly={false}
        value={avatarUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language,
              avatarUrl: value,
              apps,
              roles,
              sessions,
            };
            const result = onChange(modelFields);
            value = result?.avatarUrl ?? value;
          }
          if (errors.avatarUrl?.hasError) {
            runValidationTasks("avatarUrl", value);
          }
          setAvatarUrl(value);
        }}
        onBlur={() => runValidationTasks("avatarUrl", avatarUrl)}
        errorMessage={errors.avatarUrl?.errorMessage}
        hasError={errors.avatarUrl?.hasError}
        {...getOverrideProps(overrides, "avatarUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language,
              avatarUrl,
              apps: values,
              roles,
              sessions,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language,
              avatarUrl,
              apps,
              roles: values,
              sessions,
            };
            const result = onChange(modelFields);
            values = result?.roles ?? values;
          }
          setRoles(values);
          setCurrentRolesValue(undefined);
          setCurrentRolesDisplayValue("");
        }}
        currentFieldValue={currentRolesValue}
        label={"Roles"}
        items={roles}
        hasError={errors?.roles?.hasError}
        errorMessage={errors?.roles?.errorMessage}
        getBadgeText={getDisplayValue.roles}
        setFieldValue={(model) => {
          setCurrentRolesDisplayValue(
            model ? getDisplayValue.roles(model) : ""
          );
          setCurrentRolesValue(model);
        }}
        inputFieldRef={rolesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Roles"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Role"
          value={currentRolesDisplayValue}
          options={roleRecords
            .filter((r) => !rolesIdSet.has(getIDValue.roles?.(r)))
            .map((r) => ({
              id: getIDValue.roles?.(r),
              label: getDisplayValue.roles?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentRolesValue(
              roleRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRolesDisplayValue(label);
            runValidationTasks("roles", label);
          }}
          onClear={() => {
            setCurrentRolesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.roles?.hasError) {
              runValidationTasks("roles", value);
            }
            setCurrentRolesDisplayValue(value);
            setCurrentRolesValue(undefined);
          }}
          onBlur={() => runValidationTasks("roles", currentRolesDisplayValue)}
          errorMessage={errors.roles?.errorMessage}
          hasError={errors.roles?.hasError}
          ref={rolesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "roles")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language,
              avatarUrl,
              apps,
              roles,
              sessions: values,
            };
            const result = onChange(modelFields);
            values = result?.sessions ?? values;
          }
          setSessions(values);
          setCurrentSessionsValue(undefined);
          setCurrentSessionsDisplayValue("");
        }}
        currentFieldValue={currentSessionsValue}
        label={"Sessions"}
        items={sessions}
        hasError={errors?.sessions?.hasError}
        errorMessage={errors?.sessions?.errorMessage}
        getBadgeText={getDisplayValue.sessions}
        setFieldValue={(model) => {
          setCurrentSessionsDisplayValue(
            model ? getDisplayValue.sessions(model) : ""
          );
          setCurrentSessionsValue(model);
        }}
        inputFieldRef={sessionsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Sessions"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Session"
          value={currentSessionsDisplayValue}
          options={sessionRecords
            .filter((r) => !sessionsIdSet.has(getIDValue.sessions?.(r)))
            .map((r) => ({
              id: getIDValue.sessions?.(r),
              label: getDisplayValue.sessions?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSessionsValue(
              sessionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSessionsDisplayValue(label);
            runValidationTasks("sessions", label);
          }}
          onClear={() => {
            setCurrentSessionsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sessions?.hasError) {
              runValidationTasks("sessions", value);
            }
            setCurrentSessionsDisplayValue(value);
            setCurrentSessionsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("sessions", currentSessionsDisplayValue)
          }
          errorMessage={errors.sessions?.errorMessage}
          hasError={errors.sessions?.hasError}
          ref={sessionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sessions")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
