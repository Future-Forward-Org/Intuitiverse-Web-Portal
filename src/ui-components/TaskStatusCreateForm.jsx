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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { TaskStatus, User, Task } from "../models";
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
export default function TaskStatusCreateForm(props) {
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
    user: undefined,
    Progress: "",
    taskID: undefined,
    isEnabled: false,
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [Progress, setProgress] = React.useState(initialValues.Progress);
  const [taskID, setTaskID] = React.useState(initialValues.taskID);
  const [isEnabled, setIsEnabled] = React.useState(initialValues.isEnabled);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setProgress(initialValues.Progress);
    setTaskID(initialValues.taskID);
    setCurrentTaskIDValue(undefined);
    setCurrentTaskIDDisplayValue("");
    setIsEnabled(initialValues.isEnabled);
    setErrors({});
  };
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentTaskIDDisplayValue, setCurrentTaskIDDisplayValue] =
    React.useState("");
  const [currentTaskIDValue, setCurrentTaskIDValue] = React.useState(undefined);
  const taskIDRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const taskRecords = useDataStoreBinding({
    type: "collection",
    model: Task,
  }).items;
  const getDisplayValue = {
    user: (r) => `${r?.userName ? r?.userName + " - " : ""}${r?.id}`,
    taskID: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    user: [],
    Progress: [],
    taskID: [{ type: "Required" }],
    isEnabled: [],
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
          user,
          Progress,
          taskID,
          isEnabled,
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
          await DataStore.save(new TaskStatus(modelFields));
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
      {...getOverrideProps(overrides, "TaskStatusCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              Progress,
              taskID,
              isEnabled,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          setUser(value);
          setCurrentUserValue(undefined);
          setCurrentUserDisplayValue("");
        }}
        currentFieldValue={currentUserValue}
        label={"User"}
        items={user ? [user] : []}
        hasError={errors?.user?.hasError}
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(model ? getDisplayValue.user(model) : "");
          setCurrentUserValue(model);
        }}
        inputFieldRef={userRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserDisplayValue}
          options={userRecords
            .filter((r) => !userIdSet.has(getIDValue.user?.(r)))
            .map((r) => ({
              id: getIDValue.user?.(r),
              label: getDisplayValue.user?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserDisplayValue(label);
            runValidationTasks("user", label);
          }}
          onClear={() => {
            setCurrentUserDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.user?.hasError) {
              runValidationTasks("user", value);
            }
            setCurrentUserDisplayValue(value);
            setCurrentUserValue(undefined);
          }}
          onBlur={() => runValidationTasks("user", currentUserDisplayValue)}
          errorMessage={errors.user?.errorMessage}
          hasError={errors.user?.hasError}
          ref={userRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "user")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Progress"
        isRequired={false}
        isReadOnly={false}
        value={Progress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              Progress: value,
              taskID,
              isEnabled,
            };
            const result = onChange(modelFields);
            value = result?.Progress ?? value;
          }
          if (errors.Progress?.hasError) {
            runValidationTasks("Progress", value);
          }
          setProgress(value);
        }}
        onBlur={() => runValidationTasks("Progress", Progress)}
        errorMessage={errors.Progress?.errorMessage}
        hasError={errors.Progress?.hasError}
        {...getOverrideProps(overrides, "Progress")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user,
              Progress,
              taskID: value,
              isEnabled,
            };
            const result = onChange(modelFields);
            value = result?.taskID ?? value;
          }
          setTaskID(value);
          setCurrentTaskIDValue(undefined);
        }}
        currentFieldValue={currentTaskIDValue}
        label={"Task id"}
        items={taskID ? [taskID] : []}
        hasError={errors?.taskID?.hasError}
        errorMessage={errors?.taskID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.taskID(taskRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentTaskIDDisplayValue(
            value
              ? getDisplayValue.taskID(taskRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentTaskIDValue(value);
        }}
        inputFieldRef={taskIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Task"
          value={currentTaskIDDisplayValue}
          options={taskRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.taskID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskIDValue(id);
            setCurrentTaskIDDisplayValue(label);
            runValidationTasks("taskID", label);
          }}
          onClear={() => {
            setCurrentTaskIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.taskID?.hasError) {
              runValidationTasks("taskID", value);
            }
            setCurrentTaskIDDisplayValue(value);
            setCurrentTaskIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("taskID", currentTaskIDValue)}
          errorMessage={errors.taskID?.errorMessage}
          hasError={errors.taskID?.hasError}
          ref={taskIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "taskID")}
        ></Autocomplete>
      </ArrayField>
      <SwitchField
        label="Is enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              user,
              Progress,
              taskID,
              isEnabled: value,
            };
            const result = onChange(modelFields);
            value = result?.isEnabled ?? value;
          }
          if (errors.isEnabled?.hasError) {
            runValidationTasks("isEnabled", value);
          }
          setIsEnabled(value);
        }}
        onBlur={() => runValidationTasks("isEnabled", isEnabled)}
        errorMessage={errors.isEnabled?.errorMessage}
        hasError={errors.isEnabled?.hasError}
        {...getOverrideProps(overrides, "isEnabled")}
      ></SwitchField>
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
