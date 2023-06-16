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
import {
  App,
  User,
  Task,
  MagicCode as MagicCode0,
  Role,
  AppUser,
  AppRole,
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
    Users: [],
    Tasks: [],
    MagicCode: undefined,
    description: "",
    buttonName: "",
    Roles: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Users, setUsers] = React.useState(initialValues.Users);
  const [Tasks, setTasks] = React.useState(initialValues.Tasks);
  const [MagicCode, setMagicCode] = React.useState(initialValues.MagicCode);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [buttonName, setButtonName] = React.useState(initialValues.buttonName);
  const [Roles, setRoles] = React.useState(initialValues.Roles);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setUsers(initialValues.Users);
    setCurrentUsersValue(undefined);
    setCurrentUsersDisplayValue("");
    setTasks(initialValues.Tasks);
    setCurrentTasksValue(undefined);
    setCurrentTasksDisplayValue("");
    setMagicCode(initialValues.MagicCode);
    setCurrentMagicCodeValue(undefined);
    setCurrentMagicCodeDisplayValue("");
    setDescription(initialValues.description);
    setButtonName(initialValues.buttonName);
    setRoles(initialValues.Roles);
    setCurrentRolesValue(undefined);
    setCurrentRolesDisplayValue("");
    setErrors({});
  };
  const [currentUsersDisplayValue, setCurrentUsersDisplayValue] =
    React.useState("");
  const [currentUsersValue, setCurrentUsersValue] = React.useState(undefined);
  const UsersRef = React.createRef();
  const [currentTasksDisplayValue, setCurrentTasksDisplayValue] =
    React.useState("");
  const [currentTasksValue, setCurrentTasksValue] = React.useState(undefined);
  const TasksRef = React.createRef();
  const [currentMagicCodeDisplayValue, setCurrentMagicCodeDisplayValue] =
    React.useState("");
  const [currentMagicCodeValue, setCurrentMagicCodeValue] =
    React.useState(undefined);
  const MagicCodeRef = React.createRef();
  const [currentRolesDisplayValue, setCurrentRolesDisplayValue] =
    React.useState("");
  const [currentRolesValue, setCurrentRolesValue] = React.useState(undefined);
  const RolesRef = React.createRef();
  const getIDValue = {
    Users: (r) => JSON.stringify({ id: r?.id }),
    Tasks: (r) => JSON.stringify({ id: r?.id }),
    MagicCode: (r) => JSON.stringify({ id: r?.id }),
    Roles: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersIdSet = new Set(
    Array.isArray(Users)
      ? Users.map((r) => getIDValue.Users?.(r))
      : getIDValue.Users?.(Users)
  );
  const TasksIdSet = new Set(
    Array.isArray(Tasks)
      ? Tasks.map((r) => getIDValue.Tasks?.(r))
      : getIDValue.Tasks?.(Tasks)
  );
  const MagicCodeIdSet = new Set(
    Array.isArray(MagicCode)
      ? MagicCode.map((r) => getIDValue.MagicCode?.(r))
      : getIDValue.MagicCode?.(MagicCode)
  );
  const RolesIdSet = new Set(
    Array.isArray(Roles)
      ? Roles.map((r) => getIDValue.Roles?.(r))
      : getIDValue.Roles?.(Roles)
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
    model: MagicCode0,
  }).items;
  const roleRecords = useDataStoreBinding({
    type: "collection",
    model: Role,
  }).items;
  const getDisplayValue = {
    Users: (r) => `${r?.userName ? r?.userName + " - " : ""}${r?.id}`,
    Tasks: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    MagicCode: (r) => `${r?.titleText ? r?.titleText + " - " : ""}${r?.id}`,
    Roles: (r) => `${r?.displayName ? r?.displayName + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    Users: [],
    Tasks: [],
    MagicCode: [],
    description: [],
    buttonName: [],
    Roles: [{ type: "Required", validationMessage: "Role is required." }],
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
          Users,
          Tasks,
          MagicCode,
          description,
          buttonName,
          Roles,
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
            MagicCode: modelFields.MagicCode,
            description: modelFields.description,
            buttonName: modelFields.buttonName,
          };
          const app = await DataStore.save(new App(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Users.reduce((promises, user) => {
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
            ...Tasks.reduce((promises, original) => {
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
            ...Roles.reduce((promises, role) => {
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
              Users,
              Tasks,
              MagicCode,
              description,
              buttonName,
              Roles,
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
              Users: values,
              Tasks,
              MagicCode,
              description,
              buttonName,
              Roles,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Users,
              Tasks: values,
              MagicCode,
              description,
              buttonName,
              Roles,
            };
            const result = onChange(modelFields);
            values = result?.Tasks ?? values;
          }
          setTasks(values);
          setCurrentTasksValue(undefined);
          setCurrentTasksDisplayValue("");
        }}
        currentFieldValue={currentTasksValue}
        label={"Tasks"}
        items={Tasks}
        hasError={errors?.Tasks?.hasError}
        errorMessage={errors?.Tasks?.errorMessage}
        getBadgeText={getDisplayValue.Tasks}
        setFieldValue={(model) => {
          setCurrentTasksDisplayValue(
            model ? getDisplayValue.Tasks(model) : ""
          );
          setCurrentTasksValue(model);
        }}
        inputFieldRef={TasksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tasks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Task"
          value={currentTasksDisplayValue}
          options={taskRecords
            .filter((r) => !TasksIdSet.has(getIDValue.Tasks?.(r)))
            .map((r) => ({
              id: getIDValue.Tasks?.(r),
              label: getDisplayValue.Tasks?.(r),
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
            runValidationTasks("Tasks", label);
          }}
          onClear={() => {
            setCurrentTasksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Tasks?.hasError) {
              runValidationTasks("Tasks", value);
            }
            setCurrentTasksDisplayValue(value);
            setCurrentTasksValue(undefined);
          }}
          onBlur={() => runValidationTasks("Tasks", currentTasksDisplayValue)}
          errorMessage={errors.Tasks?.errorMessage}
          hasError={errors.Tasks?.hasError}
          ref={TasksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Tasks")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              Users,
              Tasks,
              MagicCode: value,
              description,
              buttonName,
              Roles,
            };
            const result = onChange(modelFields);
            value = result?.MagicCode ?? value;
          }
          setMagicCode(value);
          setCurrentMagicCodeValue(undefined);
          setCurrentMagicCodeDisplayValue("");
        }}
        currentFieldValue={currentMagicCodeValue}
        label={"Magic code"}
        items={MagicCode ? [MagicCode] : []}
        hasError={errors?.MagicCode?.hasError}
        errorMessage={errors?.MagicCode?.errorMessage}
        getBadgeText={getDisplayValue.MagicCode}
        setFieldValue={(model) => {
          setCurrentMagicCodeDisplayValue(
            model ? getDisplayValue.MagicCode(model) : ""
          );
          setCurrentMagicCodeValue(model);
        }}
        inputFieldRef={MagicCodeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Magic code"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search MagicCode"
          value={currentMagicCodeDisplayValue}
          options={magicCodeRecords
            .filter((r) => !MagicCodeIdSet.has(getIDValue.MagicCode?.(r)))
            .map((r) => ({
              id: getIDValue.MagicCode?.(r),
              label: getDisplayValue.MagicCode?.(r),
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
            runValidationTasks("MagicCode", label);
          }}
          onClear={() => {
            setCurrentMagicCodeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.MagicCode?.hasError) {
              runValidationTasks("MagicCode", value);
            }
            setCurrentMagicCodeDisplayValue(value);
            setCurrentMagicCodeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("MagicCode", currentMagicCodeDisplayValue)
          }
          errorMessage={errors.MagicCode?.errorMessage}
          hasError={errors.MagicCode?.hasError}
          ref={MagicCodeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "MagicCode")}
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
              Users,
              Tasks,
              MagicCode,
              description: value,
              buttonName,
              Roles,
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
              Users,
              Tasks,
              MagicCode,
              description,
              buttonName: value,
              Roles,
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
              Users,
              Tasks,
              MagicCode,
              description,
              buttonName,
              Roles: values,
            };
            const result = onChange(modelFields);
            values = result?.Roles ?? values;
          }
          setRoles(values);
          setCurrentRolesValue(undefined);
          setCurrentRolesDisplayValue("");
        }}
        currentFieldValue={currentRolesValue}
        label={"Roles"}
        items={Roles}
        hasError={errors?.Roles?.hasError}
        errorMessage={errors?.Roles?.errorMessage}
        getBadgeText={getDisplayValue.Roles}
        setFieldValue={(model) => {
          setCurrentRolesDisplayValue(
            model ? getDisplayValue.Roles(model) : ""
          );
          setCurrentRolesValue(model);
        }}
        inputFieldRef={RolesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Roles"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Role"
          value={currentRolesDisplayValue}
          options={roleRecords
            .filter((r) => !RolesIdSet.has(getIDValue.Roles?.(r)))
            .map((r) => ({
              id: getIDValue.Roles?.(r),
              label: getDisplayValue.Roles?.(r),
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
            runValidationTasks("Roles", label);
          }}
          onClear={() => {
            setCurrentRolesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Roles?.hasError) {
              runValidationTasks("Roles", value);
            }
            setCurrentRolesDisplayValue(value);
            setCurrentRolesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Roles", currentRolesDisplayValue)}
          errorMessage={errors.Roles?.errorMessage}
          hasError={errors.Roles?.hasError}
          ref={RolesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Roles")}
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
