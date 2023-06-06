/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Session } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SessionCreateForm(props) {
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
    description: "",
    startDateTime: "",
    endDateTime: "",
    sessionCode: "",
    host: "",
    attendees: "",
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
    setName(initialValues.name);
    setDescription(initialValues.description);
    setStartDateTime(initialValues.startDateTime);
    setEndDateTime(initialValues.endDateTime);
    setSessionCode(initialValues.sessionCode);
    setHost(initialValues.host);
    setAttendees(initialValues.attendees);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    startDateTime: [{ type: "Required" }],
    endDateTime: [{ type: "Required" }],
    sessionCode: [],
    host: [{ type: "Required" }],
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
          await DataStore.save(new Session(modelFields));
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
        isRequired={true}
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
      <TextField
        label="Attendees"
        isRequired={false}
        isReadOnly={false}
        value={attendees}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startDateTime,
              endDateTime,
              sessionCode,
              host,
              attendees: value,
            };
            const result = onChange(modelFields);
            value = result?.attendees ?? value;
          }
          if (errors.attendees?.hasError) {
            runValidationTasks("attendees", value);
          }
          setAttendees(value);
        }}
        onBlur={() => runValidationTasks("attendees", attendees)}
        errorMessage={errors.attendees?.errorMessage}
        hasError={errors.attendees?.hasError}
        {...getOverrideProps(overrides, "attendees")}
      ></TextField>
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
