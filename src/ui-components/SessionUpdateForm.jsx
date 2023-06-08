/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Session } from "../models";
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
export default function SessionUpdateForm(props) {
  const {
    id: idProp,
    session: sessionModelProp,
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
    description: "",
    startDateTime: "",
    endDateTime: "",
    sessionCode: "",
    host: "",
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
  const [sessionCode, setSessionCode] = React.useState(
    initialValues.sessionCode
  );
  const [host, setHost] = React.useState(initialValues.host);
  const [attendees, setAttendees] = React.useState(initialValues.attendees);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sessionRecord
      ? { ...initialValues, ...sessionRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setStartDateTime(cleanValues.startDateTime);
    setEndDateTime(cleanValues.endDateTime);
    setSessionCode(cleanValues.sessionCode);
    setHost(cleanValues.host);
    setAttendees(cleanValues.attendees ?? []);
    setCurrentAttendeesValue("");
    setErrors({});
  };
  const [sessionRecord, setSessionRecord] = React.useState(sessionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Session, idProp)
        : sessionModelProp;
      setSessionRecord(record);
    };
    queryData();
  }, [idProp, sessionModelProp]);
  React.useEffect(resetStateValues, [sessionRecord]);
  const [currentAttendeesValue, setCurrentAttendeesValue] = React.useState("");
  const attendeesRef = React.createRef();
  const validations = {
    name: [],
    description: [],
    startDateTime: [{ type: "Required" }],
    endDateTime: [{ type: "Required" }],
    sessionCode: [],
    host: [],
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
          sessionCode,
          host,
          attendees,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await DataStore.save(
            Session.copyOf(sessionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SessionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
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
              sessionCode,
              host,
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
              sessionCode,
              host,
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
        label="Start date time"
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
              sessionCode,
              host,
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
        label="End date time"
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
              sessionCode,
              host,
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
      <TextField
        label="Session code"
        isRequired={false}
        isReadOnly={false}
        value={sessionCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime,
              endDateTime,
              sessionCode: value,
              host,
              attendees,
            };
            const result = onChange(modelFields);
            value = result?.sessionCode ?? value;
          }
          if (errors.sessionCode?.hasError) {
            runValidationTasks("sessionCode", value);
          }
          setSessionCode(value);
        }}
        onBlur={() => runValidationTasks("sessionCode", sessionCode)}
        errorMessage={errors.sessionCode?.errorMessage}
        hasError={errors.sessionCode?.hasError}
        {...getOverrideProps(overrides, "sessionCode")}
      ></TextField>
      <TextField
        label="Host"
        isRequired={false}
        isReadOnly={false}
        value={host}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime,
              endDateTime,
              sessionCode,
              host: value,
              attendees,
            };
            const result = onChange(modelFields);
            value = result?.host ?? value;
          }
          if (errors.host?.hasError) {
            runValidationTasks("host", value);
          }
          setHost(value);
        }}
        onBlur={() => runValidationTasks("host", host)}
        errorMessage={errors.host?.errorMessage}
        hasError={errors.host?.hasError}
        {...getOverrideProps(overrides, "host")}
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
              sessionCode,
              host,
              attendees: values,
            };
            const result = onChange(modelFields);
            values = result?.attendees ?? values;
          }
          setAttendees(values);
          setCurrentAttendeesValue("");
        }}
        currentFieldValue={currentAttendeesValue}
        label={"Attendees"}
        items={attendees}
        hasError={errors?.attendees?.hasError}
        errorMessage={errors?.attendees?.errorMessage}
        setFieldValue={setCurrentAttendeesValue}
        inputFieldRef={attendeesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Attendees"
          isRequired={false}
          isReadOnly={false}
          value={currentAttendeesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attendees?.hasError) {
              runValidationTasks("attendees", value);
            }
            setCurrentAttendeesValue(value);
          }}
          onBlur={() => runValidationTasks("attendees", currentAttendeesValue)}
          errorMessage={errors.attendees?.errorMessage}
          hasError={errors.attendees?.hasError}
          ref={attendeesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attendees")}
        ></TextField>
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
          isDisabled={!(idProp || sessionModelProp)}
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
              !(idProp || sessionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
