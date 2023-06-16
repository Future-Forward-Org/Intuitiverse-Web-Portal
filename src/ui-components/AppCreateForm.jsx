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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { App, User, Task, MagicCode, Role, AppUser, AppRole } from "../models";
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
export default function AppCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    users: [],
    tasks: [],
    magicCode: undefined,
    description: "",
    buttonName: "",
    roles: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [users, setUsers] = React.useState(initialValues.users);
  const [tasks, setTasks] = React.useState(initialValues.tasks);
  const [magicCode, setMagicCode] = React.useState(initialValues.magicCode);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [buttonName, setButtonName] = React.useState(initialValues.buttonName);
  const [roles, setRoles] = React.useState(initialValues.roles);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setUsers(initialValues.users);
    setCurrentUsersValue(undefined);
    setCurrentUsersDisplayValue("");
    setTasks(initialValues.tasks);
    setCurrentTasksValue(undefined);
    setCurrentTasksDisplayValue("");
    setMagicCode(initialValues.magicCode);
    setCurrentMagicCodeValue(undefined);
    setCurrentMagicCodeDisplayValue("");
    setDescription(initialValues.description);
    setButtonName(initialValues.buttonName);
    setRoles(initialValues.roles);
    setCurrentRolesValue(undefined);
    setCurrentRolesDisplayValue("");
    setErrors({});
  };
  const [currentUsersDisplayValue, setCurrentUsersDisplayValue] =
    React.useState("");
  const [currentUsersValue, setCurrentUsersValue] = React.useState(undefined);
  const usersRef = React.createRef();
  const [currentTasksDisplayValue, setCurrentTasksDisplayValue] =
    React.useState("");
  const [currentTasksValue, setCurrentTasksValue] = React.useState(undefined);
  const tasksRef = React.createRef();
  const [currentMagicCodeDisplayValue, setCurrentMagicCodeDisplayValue] =
    React.useState("");
  const [currentMagicCodeValue, setCurrentMagicCodeValue] =
    React.useState(undefined);
  const magicCodeRef = React.createRef();
  const [currentRolesDisplayValue, setCurrentRolesDisplayValue] =
    React.useState("");
  const [currentRolesValue, setCurrentRolesValue] = React.useState(undefined);
  const rolesRef = React.createRef();
  const getIDValue = {
    users: (r) => JSON.stringify({ id: r?.id }),
    tasks: (r) => JSON.stringify({ id: r?.id }),
    magicCode: (r) => JSON.stringify({ id: r?.id }),
    roles: (r) => JSON.stringify({ id: r?.id }),
  };
  const usersIdSet = new Set(
    Array.isArray(users)
      ? users.map((r) => getIDValue.users?.(r))
      : getIDValue.users?.(users)
  );
  const tasksIdSet = new Set(
    Array.isArray(tasks)
      ? tasks.map((r) => getIDValue.tasks?.(r))
      : getIDValue.tasks?.(tasks)
  );
  const magicCodeIdSet = new Set(
    Array.isArray(magicCode)
      ? magicCode.map((r) => getIDValue.magicCode?.(r))
      : getIDValue.magicCode?.(magicCode)
  );
  const rolesIdSet = new Set(
    Array.isArray(roles)
      ? roles.map((r) => getIDValue.roles?.(r))
      : getIDValue.roles?.(roles)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const taskRecords = useDataStoreBinding({
    type: "collection",
    model: Task,
  }).items;
  const magicCodeRecords = useDataStoreBinding({
    type: "collection",
    model: MagicCode,
  }).items;
  const roleRecords = useDataStoreBinding({
    type: "collection",
    model: Role,
  }).items;
  const getDisplayValue = {
    users: (r) => `${r?.userName ? r?.userName + " - " : ""}${r?.id}`,
    tasks: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    magicCode: (r) => `${r?.titleText ? r?.titleText + " - " : ""}${r?.id}`,
    roles: (r) => `${r?.displayName ? r?.displayName + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    users: [],
    tasks: [],
    magicCode: [],
    description: [],
    buttonName: [],
    roles: [{ type: "Required", validationMessage: "Role is required." }],
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
          name,
          users,
          tasks,
          magicCode,
          description,
          buttonName,
          roles,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            magicCode: modelFields.magicCode,
            description: modelFields.description,
            buttonName: modelFields.buttonName,
          };
          const app = await DataStore.save(new App(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...users.reduce((promises, user) => {
              promises.push(
                DataStore.save(
                  new AppUser({
                    app,
                    user,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...tasks.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Task.copyOf(original, (updated) => {
                    updated.appID = app.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...roles.reduce((promises, role) => {
              promises.push(
                DataStore.save(
                  new AppRole({
                    app,
                    role,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AppCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              users,
              tasks,
              magicCode,
              description,
              buttonName,
              roles,
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
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              users: values,
              tasks,
              magicCode,
              description,
              buttonName,
              roles,
            };
            const result = onChange(modelFields);
            values = result?.users ?? values;
          }
          setUsers(values);
          setCurrentUsersValue(undefined);
          setCurrentUsersDisplayValue("");
        }}
        currentFieldValue={currentUsersValue}
        label={"Users"}
        items={users}
        hasError={errors?.users?.hasError}
        errorMessage={errors?.users?.errorMessage}
        getBadgeText={getDisplayValue.users}
        setFieldValue={(model) => {
          setCurrentUsersDisplayValue(
            model ? getDisplayValue.users(model) : ""
          );
          setCurrentUsersValue(model);
        }}
        inputFieldRef={usersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUsersDisplayValue}
          options={userRecords
            .filter((r) => !usersIdSet.has(getIDValue.users?.(r)))
            .map((r) => ({
              id: getIDValue.users?.(r),
              label: getDisplayValue.users?.(r),
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
            runValidationTasks("users", label);
          }}
          onClear={() => {
            setCurrentUsersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.users?.hasError) {
              runValidationTasks("users", value);
            }
            setCurrentUsersDisplayValue(value);
            setCurrentUsersValue(undefined);
          }}
          onBlur={() => runValidationTasks("users", currentUsersDisplayValue)}
          errorMessage={errors.users?.errorMessage}
          hasError={errors.users?.hasError}
          ref={usersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "users")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              users,
              tasks: values,
              magicCode,
              description,
              buttonName,
              roles,
            };
            const result = onChange(modelFields);
            values = result?.tasks ?? values;
          }
          setTasks(values);
          setCurrentTasksValue(undefined);
          setCurrentTasksDisplayValue("");
        }}
        currentFieldValue={currentTasksValue}
        label={"Tasks"}
        items={tasks}
        hasError={errors?.tasks?.hasError}
        errorMessage={errors?.tasks?.errorMessage}
        getBadgeText={getDisplayValue.tasks}
        setFieldValue={(model) => {
          setCurrentTasksDisplayValue(
            model ? getDisplayValue.tasks(model) : ""
          );
          setCurrentTasksValue(model);
        }}
        inputFieldRef={tasksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tasks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Task"
          value={currentTasksDisplayValue}
          options={taskRecords
            .filter((r) => !tasksIdSet.has(getIDValue.tasks?.(r)))
            .map((r) => ({
              id: getIDValue.tasks?.(r),
              label: getDisplayValue.tasks?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTasksValue(
              taskRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTasksDisplayValue(label);
            runValidationTasks("tasks", label);
          }}
          onClear={() => {
            setCurrentTasksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tasks?.hasError) {
              runValidationTasks("tasks", value);
            }
            setCurrentTasksDisplayValue(value);
            setCurrentTasksValue(undefined);
          }}
          onBlur={() => runValidationTasks("tasks", currentTasksDisplayValue)}
          errorMessage={errors.tasks?.errorMessage}
          hasError={errors.tasks?.hasError}
          ref={tasksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tasks")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              users,
              tasks,
              magicCode: value,
              description,
              buttonName,
              roles,
            };
            const result = onChange(modelFields);
            value = result?.magicCode ?? value;
          }
          setMagicCode(value);
          setCurrentMagicCodeValue(undefined);
          setCurrentMagicCodeDisplayValue("");
        }}
        currentFieldValue={currentMagicCodeValue}
        label={"Magic code"}
        items={magicCode ? [magicCode] : []}
        hasError={errors?.magicCode?.hasError}
        errorMessage={errors?.magicCode?.errorMessage}
        getBadgeText={getDisplayValue.magicCode}
        setFieldValue={(model) => {
          setCurrentMagicCodeDisplayValue(
            model ? getDisplayValue.magicCode(model) : ""
          );
          setCurrentMagicCodeValue(model);
        }}
        inputFieldRef={magicCodeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Magic code"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search MagicCode"
          value={currentMagicCodeDisplayValue}
          options={magicCodeRecords
            .filter((r) => !magicCodeIdSet.has(getIDValue.magicCode?.(r)))
            .map((r) => ({
              id: getIDValue.magicCode?.(r),
              label: getDisplayValue.magicCode?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMagicCodeValue(
              magicCodeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMagicCodeDisplayValue(label);
            runValidationTasks("magicCode", label);
          }}
          onClear={() => {
            setCurrentMagicCodeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.magicCode?.hasError) {
              runValidationTasks("magicCode", value);
            }
            setCurrentMagicCodeDisplayValue(value);
            setCurrentMagicCodeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("magicCode", currentMagicCodeDisplayValue)
          }
          errorMessage={errors.magicCode?.errorMessage}
          hasError={errors.magicCode?.hasError}
          ref={magicCodeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "magicCode")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              users,
              tasks,
              magicCode,
              description: value,
              buttonName,
              roles,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Button name"
        isRequired={false}
        isReadOnly={false}
        value={buttonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              users,
              tasks,
              magicCode,
              description,
              buttonName: value,
              roles,
            };
            const result = onChange(modelFields);
            value = result?.buttonName ?? value;
          }
          if (errors.buttonName?.hasError) {
            runValidationTasks("buttonName", value);
          }
          setButtonName(value);
        }}
        onBlur={() => runValidationTasks("buttonName", buttonName)}
        errorMessage={errors.buttonName?.errorMessage}
        hasError={errors.buttonName?.hasError}
        {...getOverrideProps(overrides, "buttonName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              users,
              tasks,
              magicCode,
              description,
              buttonName,
              roles: values,
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
          isRequired={true}
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
