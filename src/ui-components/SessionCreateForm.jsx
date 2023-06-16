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
import { Session, User, SessionUserAttendees } from "../models";
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
export default function SessionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    attendees: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [startDateTime, setStartDateTime] = React.useState(
    initialValues.startDateTime
  );
  const [endDateTime, setEndDateTime] = React.useState(
    initialValues.endDateTime
  );
  const [attendees, setAttendees] = React.useState(initialValues.attendees);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setStartDateTime(initialValues.startDateTime);
    setEndDateTime(initialValues.endDateTime);
    setAttendees(initialValues.attendees);
    setCurrentAttendeesValue(undefined);
    setCurrentAttendeesDisplayValue("");
    setErrors({});
  };
  const [currentAttendeesDisplayValue, setCurrentAttendeesDisplayValue] =
    React.useState("");
  const [currentAttendeesValue, setCurrentAttendeesValue] =
    React.useState(undefined);
  const attendeesRef = React.createRef();
  const getIDValue = {
    attendees: (r) => JSON.stringify({ id: r?.id }),
  };
  const attendeesIdSet = new Set(
    Array.isArray(attendees)
      ? attendees.map((r) => getIDValue.attendees?.(r))
      : getIDValue.attendees?.(attendees)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const getDisplayValue = {
    attendees: (r) => `${r?.email}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    startDateTime: [{ type: "Required" }],
    endDateTime: [{ type: "Required" }],
    attendees: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          description,
          startDateTime,
          endDateTime,
          attendees,
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
            description: modelFields.description,
            startDateTime: modelFields.startDateTime,
            endDateTime: modelFields.endDateTime,
          };
          const session = await DataStore.save(new Session(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...attendees.reduce((promises, user) => {
              promises.push(
                DataStore.save(
                  new SessionUserAttendees({
                    session,
                    user,
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
      {...getOverrideProps(overrides, "SessionCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              startDateTime,
              endDateTime,
              attendees,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              startDateTime,
              endDateTime,
              attendees,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Start date time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={startDateTime && convertToLocal(new Date(startDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime: value,
              endDateTime,
              attendees,
            };
            const result = onChange(modelFields);
            value = result?.startDateTime ?? value;
          }
          if (errors.startDateTime?.hasError) {
            runValidationTasks("startDateTime", value);
          }
          setStartDateTime(value);
        }}
        onBlur={() => runValidationTasks("startDateTime", startDateTime)}
        errorMessage={errors.startDateTime?.errorMessage}
        hasError={errors.startDateTime?.hasError}
        {...getOverrideProps(overrides, "startDateTime")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>End date time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={endDateTime && convertToLocal(new Date(endDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime,
              endDateTime: value,
              attendees,
            };
            const result = onChange(modelFields);
            value = result?.endDateTime ?? value;
          }
          if (errors.endDateTime?.hasError) {
            runValidationTasks("endDateTime", value);
          }
          setEndDateTime(value);
        }}
        onBlur={() => runValidationTasks("endDateTime", endDateTime)}
        errorMessage={errors.endDateTime?.errorMessage}
        hasError={errors.endDateTime?.hasError}
        {...getOverrideProps(overrides, "endDateTime")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime,
              endDateTime,
              attendees: values,
            };
            const result = onChange(modelFields);
            values = result?.attendees ?? values;
          }
          setAttendees(values);
          setCurrentAttendeesValue(undefined);
          setCurrentAttendeesDisplayValue("");
        }}
        currentFieldValue={currentAttendeesValue}
        label={"Attendees"}
        items={attendees}
        hasError={errors?.attendees?.hasError}
        errorMessage={errors?.attendees?.errorMessage}
        getBadgeText={getDisplayValue.attendees}
        setFieldValue={(model) => {
          setCurrentAttendeesDisplayValue(
            model ? getDisplayValue.attendees(model) : ""
          );
          setCurrentAttendeesValue(model);
        }}
        inputFieldRef={attendeesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Attendees"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentAttendeesDisplayValue}
          options={userRecords
            .filter((r) => !attendeesIdSet.has(getIDValue.attendees?.(r)))
            .map((r) => ({
              id: getIDValue.attendees?.(r),
              label: getDisplayValue.attendees?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAttendeesValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAttendeesDisplayValue(label);
            runValidationTasks("attendees", label);
          }}
          onClear={() => {
            setCurrentAttendeesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attendees?.hasError) {
              runValidationTasks("attendees", value);
            }
            setCurrentAttendeesDisplayValue(value);
            setCurrentAttendeesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("attendees", currentAttendeesDisplayValue)
          }
          errorMessage={errors.attendees?.errorMessage}
          hasError={errors.attendees?.hasError}
          ref={attendeesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attendees")}
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
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
