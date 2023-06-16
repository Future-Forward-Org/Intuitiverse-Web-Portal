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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Task, TaskStatus, App } from "../models";
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
export default function TaskUpdateForm(props) {
  const {
    id: idProp,
    task: taskModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    name: "",
    buttonName: "",
    requiredRole: [],
    url: "",
    order: "",
    taskBehavior: "",
    appendUserID: false,
    appendTaskID: false,
    appID: undefined,
    TaskStatuses: [],
  };
  const [type, setType] = React.useState(initialValues.type);
  const [name, setName] = React.useState(initialValues.name);
  const [buttonName, setButtonName] = React.useState(initialValues.buttonName);
  const [requiredRole, setRequiredRole] = React.useState(
    initialValues.requiredRole
  );
  const [url, setUrl] = React.useState(initialValues.url);
  const [order, setOrder] = React.useState(initialValues.order);
  const [taskBehavior, setTaskBehavior] = React.useState(
    initialValues.taskBehavior
  );
  const [appendUserID, setAppendUserID] = React.useState(
    initialValues.appendUserID
  );
  const [appendTaskID, setAppendTaskID] = React.useState(
    initialValues.appendTaskID
  );
  const [appID, setAppID] = React.useState(initialValues.appID);
  const [TaskStatuses, setTaskStatuses] = React.useState(
    initialValues.TaskStatuses
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskRecord
      ? {
          ...initialValues,
          ...taskRecord,
          appID,
          TaskStatuses: linkedTaskStatuses,
        }
      : initialValues;
    setType(cleanValues.type);
    setName(cleanValues.name);
    setButtonName(cleanValues.buttonName);
    setRequiredRole(cleanValues.requiredRole ?? []);
    setCurrentRequiredRoleValue("");
    setUrl(cleanValues.url);
    setOrder(cleanValues.order);
    setTaskBehavior(cleanValues.taskBehavior);
    setAppendUserID(cleanValues.appendUserID);
    setAppendTaskID(cleanValues.appendTaskID);
    setAppID(cleanValues.appID);
    setCurrentAppIDValue(undefined);
    setCurrentAppIDDisplayValue("");
    setTaskStatuses(cleanValues.TaskStatuses ?? []);
    setCurrentTaskStatusesValue(undefined);
    setCurrentTaskStatusesDisplayValue("");
    setErrors({});
  };
  const [taskRecord, setTaskRecord] = React.useState(taskModelProp);
  const [linkedTaskStatuses, setLinkedTaskStatuses] = React.useState([]);
  const canUnlinkTaskStatuses = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Task, idProp)
        : taskModelProp;
      setTaskRecord(record);
      const appIDRecord = record ? await record.appID : undefined;
      setAppID(appIDRecord);
      const linkedTaskStatuses = record
        ? await record.TaskStatuses.toArray()
        : [];
      setLinkedTaskStatuses(linkedTaskStatuses);
    };
    queryData();
  }, [idProp, taskModelProp]);
  React.useEffect(resetStateValues, [taskRecord, appID, linkedTaskStatuses]);
  const [currentRequiredRoleValue, setCurrentRequiredRoleValue] =
    React.useState("");
  const requiredRoleRef = React.createRef();
  const [currentAppIDDisplayValue, setCurrentAppIDDisplayValue] =
    React.useState("");
  const [currentAppIDValue, setCurrentAppIDValue] = React.useState(undefined);
  const appIDRef = React.createRef();
  const [currentTaskStatusesDisplayValue, setCurrentTaskStatusesDisplayValue] =
    React.useState("");
  const [currentTaskStatusesValue, setCurrentTaskStatusesValue] =
    React.useState(undefined);
  const TaskStatusesRef = React.createRef();
  const getIDValue = {
    TaskStatuses: (r) => JSON.stringify({ id: r?.id }),
  };
  const TaskStatusesIdSet = new Set(
    Array.isArray(TaskStatuses)
      ? TaskStatuses.map((r) => getIDValue.TaskStatuses?.(r))
      : getIDValue.TaskStatuses?.(TaskStatuses)
  );
  const appRecords = useDataStoreBinding({
    type: "collection",
    model: App,
  }).items;
  const taskStatusRecords = useDataStoreBinding({
    type: "collection",
    model: TaskStatus,
  }).items;
  const getDisplayValue = {
    requiredRole: (r) => {
      const enumDisplayValueMap = {
        ADMIN: "Admin",
        HOST: "Host",
        STUDENT: "Student",
        ARCTICDRYRUN: "Arcticdryrun",
        VIRTUADCASTPILOTSTUDENT: "Virtuadcastpilotstudent",
        VIRTUADCASTPILOTTRAINER: "Virtuadcastpilottrainer",
      };
      return enumDisplayValueMap[r];
    },
    appID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    TaskStatuses: (r) => `${r?.Progress ? r?.Progress + " - " : ""}${r?.id}`,
  };
  const validations = {
    type: [],
    name: [],
    buttonName: [],
    requiredRole: [],
    url: [{ type: "URL" }],
    order: [],
    taskBehavior: [],
    appendUserID: [],
    appendTaskID: [],
    appID: [{ type: "Required" }],
    TaskStatuses: [],
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
          type,
          name,
          buttonName,
          requiredRole,
          url,
          order,
          taskBehavior,
          appendUserID,
          appendTaskID,
          appID,
          TaskStatuses,
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
          const taskStatusesToLink = [];
          const taskStatusesToUnLink = [];
          const taskStatusesSet = new Set();
          const linkedTaskStatusesSet = new Set();
          TaskStatuses.forEach((r) =>
            taskStatusesSet.add(getIDValue.TaskStatuses?.(r))
          );
          linkedTaskStatuses.forEach((r) =>
            linkedTaskStatusesSet.add(getIDValue.TaskStatuses?.(r))
          );
          linkedTaskStatuses.forEach((r) => {
            if (!taskStatusesSet.has(getIDValue.TaskStatuses?.(r))) {
              taskStatusesToUnLink.push(r);
            }
          });
          TaskStatuses.forEach((r) => {
            if (!linkedTaskStatusesSet.has(getIDValue.TaskStatuses?.(r))) {
              taskStatusesToLink.push(r);
            }
          });
          taskStatusesToUnLink.forEach((original) => {
            if (!canUnlinkTaskStatuses) {
              throw Error(
                `TaskStatus ${original.id} cannot be unlinked from Task because taskID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                TaskStatus.copyOf(original, (updated) => {
                  updated.taskID = null;
                })
              )
            );
          });
          taskStatusesToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                TaskStatus.copyOf(original, (updated) => {
                  updated.taskID = taskRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            type: modelFields.type,
            name: modelFields.name,
            buttonName: modelFields.buttonName,
            requiredRole: modelFields.requiredRole,
            url: modelFields.url,
            order: modelFields.order,
            taskBehavior: modelFields.taskBehavior,
            appendUserID: modelFields.appendUserID,
            appendTaskID: modelFields.appendTaskID,
            appID: modelFields.appID,
          };
          promises.push(
            DataStore.save(
              Task.copyOf(taskRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              name: value,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
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
      <TextField
        label="Button name"
        isRequired={false}
        isReadOnly={false}
        value={buttonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName: value,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
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
              type,
              name,
              buttonName,
              requiredRole: values,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            values = result?.requiredRole ?? values;
          }
          setRequiredRole(values);
          setCurrentRequiredRoleValue("");
        }}
        currentFieldValue={currentRequiredRoleValue}
        label={"Required role"}
        items={requiredRole}
        hasError={errors?.requiredRole?.hasError}
        errorMessage={errors?.requiredRole?.errorMessage}
        getBadgeText={getDisplayValue.requiredRole}
        setFieldValue={setCurrentRequiredRoleValue}
        inputFieldRef={requiredRoleRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Required role"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentRequiredRoleValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.requiredRole?.hasError) {
              runValidationTasks("requiredRole", value);
            }
            setCurrentRequiredRoleValue(value);
          }}
          onBlur={() =>
            runValidationTasks("requiredRole", currentRequiredRoleValue)
          }
          errorMessage={errors.requiredRole?.errorMessage}
          hasError={errors.requiredRole?.hasError}
          ref={requiredRoleRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "requiredRole")}
        >
          <option
            children="Admin"
            value="ADMIN"
            {...getOverrideProps(overrides, "requiredRoleoption0")}
          ></option>
          <option
            children="Host"
            value="HOST"
            {...getOverrideProps(overrides, "requiredRoleoption1")}
          ></option>
          <option
            children="Student"
            value="STUDENT"
            {...getOverrideProps(overrides, "requiredRoleoption2")}
          ></option>
          <option
            children="Arcticdryrun"
            value="ARCTICDRYRUN"
            {...getOverrideProps(overrides, "requiredRoleoption3")}
          ></option>
          <option
            children="Virtuadcastpilotstudent"
            value="VIRTUADCASTPILOTSTUDENT"
            {...getOverrideProps(overrides, "requiredRoleoption4")}
          ></option>
          <option
            children="Virtuadcastpilottrainer"
            value="VIRTUADCASTPILOTTRAINER"
            {...getOverrideProps(overrides, "requiredRoleoption5")}
          ></option>
        </SelectField>
      </ArrayField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url: value,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={order}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order: value,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.order ?? value;
          }
          if (errors.order?.hasError) {
            runValidationTasks("order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("order", order)}
        errorMessage={errors.order?.errorMessage}
        hasError={errors.order?.hasError}
        {...getOverrideProps(overrides, "order")}
      ></TextField>
      <SelectField
        label="Task behavior"
        placeholder="Please select an option"
        isDisabled={false}
        value={taskBehavior}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior: value,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.taskBehavior ?? value;
          }
          if (errors.taskBehavior?.hasError) {
            runValidationTasks("taskBehavior", value);
          }
          setTaskBehavior(value);
        }}
        onBlur={() => runValidationTasks("taskBehavior", taskBehavior)}
        errorMessage={errors.taskBehavior?.errorMessage}
        hasError={errors.taskBehavior?.hasError}
        {...getOverrideProps(overrides, "taskBehavior")}
      >
        <option
          children="Openintab"
          value="OPENINTAB"
          {...getOverrideProps(overrides, "taskBehavioroption0")}
        ></option>
        <option
          children="Openinplace"
          value="OPENINPLACE"
          {...getOverrideProps(overrides, "taskBehavioroption1")}
        ></option>
        <option
          children="Openiniframe"
          value="OPENINIFRAME"
          {...getOverrideProps(overrides, "taskBehavioroption2")}
        ></option>
        <option
          children="Openform"
          value="OPENFORM"
          {...getOverrideProps(overrides, "taskBehavioroption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Append user id"
        defaultChecked={false}
        isDisabled={false}
        isChecked={appendUserID}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID: value,
              appendTaskID,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.appendUserID ?? value;
          }
          if (errors.appendUserID?.hasError) {
            runValidationTasks("appendUserID", value);
          }
          setAppendUserID(value);
        }}
        onBlur={() => runValidationTasks("appendUserID", appendUserID)}
        errorMessage={errors.appendUserID?.errorMessage}
        hasError={errors.appendUserID?.hasError}
        {...getOverrideProps(overrides, "appendUserID")}
      ></SwitchField>
      <SwitchField
        label="Append task id"
        defaultChecked={false}
        isDisabled={false}
        isChecked={appendTaskID}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID: value,
              appID,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.appendTaskID ?? value;
          }
          if (errors.appendTaskID?.hasError) {
            runValidationTasks("appendTaskID", value);
          }
          setAppendTaskID(value);
        }}
        onBlur={() => runValidationTasks("appendTaskID", appendTaskID)}
        errorMessage={errors.appendTaskID?.errorMessage}
        hasError={errors.appendTaskID?.hasError}
        {...getOverrideProps(overrides, "appendTaskID")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID: value,
              TaskStatuses,
            };
            const result = onChange(modelFields);
            value = result?.appID ?? value;
          }
          setAppID(value);
          setCurrentAppIDValue(undefined);
        }}
        currentFieldValue={currentAppIDValue}
        label={"App id"}
        items={appID ? [appID] : []}
        hasError={errors?.appID?.hasError}
        errorMessage={errors?.appID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.appID(appRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentAppIDDisplayValue(
            value
              ? getDisplayValue.appID(appRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentAppIDValue(value);
        }}
        inputFieldRef={appIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="App id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search App"
          value={currentAppIDDisplayValue}
          options={appRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.appID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAppIDValue(id);
            setCurrentAppIDDisplayValue(label);
            runValidationTasks("appID", label);
          }}
          onClear={() => {
            setCurrentAppIDDisplayValue("");
          }}
          defaultValue={appID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.appID?.hasError) {
              runValidationTasks("appID", value);
            }
            setCurrentAppIDDisplayValue(value);
            setCurrentAppIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("appID", currentAppIDValue)}
          errorMessage={errors.appID?.errorMessage}
          hasError={errors.appID?.hasError}
          ref={appIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "appID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              name,
              buttonName,
              requiredRole,
              url,
              order,
              taskBehavior,
              appendUserID,
              appendTaskID,
              appID,
              TaskStatuses: values,
            };
            const result = onChange(modelFields);
            values = result?.TaskStatuses ?? values;
          }
          setTaskStatuses(values);
          setCurrentTaskStatusesValue(undefined);
          setCurrentTaskStatusesDisplayValue("");
        }}
        currentFieldValue={currentTaskStatusesValue}
        label={"Task statuses"}
        items={TaskStatuses}
        hasError={errors?.TaskStatuses?.hasError}
        errorMessage={errors?.TaskStatuses?.errorMessage}
        getBadgeText={getDisplayValue.TaskStatuses}
        setFieldValue={(model) => {
          setCurrentTaskStatusesDisplayValue(
            model ? getDisplayValue.TaskStatuses(model) : ""
          );
          setCurrentTaskStatusesValue(model);
        }}
        inputFieldRef={TaskStatusesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task statuses"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search TaskStatus"
          value={currentTaskStatusesDisplayValue}
          options={taskStatusRecords
            .filter((r) => !TaskStatusesIdSet.has(getIDValue.TaskStatuses?.(r)))
            .map((r) => ({
              id: getIDValue.TaskStatuses?.(r),
              label: getDisplayValue.TaskStatuses?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskStatusesValue(
              taskStatusRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskStatusesDisplayValue(label);
            runValidationTasks("TaskStatuses", label);
          }}
          onClear={() => {
            setCurrentTaskStatusesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TaskStatuses?.hasError) {
              runValidationTasks("TaskStatuses", value);
            }
            setCurrentTaskStatusesDisplayValue(value);
            setCurrentTaskStatusesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("TaskStatuses", currentTaskStatusesDisplayValue)
          }
          errorMessage={errors.TaskStatuses?.errorMessage}
          hasError={errors.TaskStatuses?.hasError}
          ref={TaskStatusesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TaskStatuses")}
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
          isDisabled={!(idProp || taskModelProp)}
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
              !(idProp || taskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
