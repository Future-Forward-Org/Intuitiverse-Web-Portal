/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Role } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RoleCreateForm(props) {
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
    displayName: "",
    name: "",
    appID: "",
  };
  const [displayName, setDisplayName] = React.useState(
    initialValues.displayName
  );
  const [name, setName] = React.useState(initialValues.name);
  const [appID, setAppID] = React.useState(initialValues.appID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDisplayName(initialValues.displayName);
    setName(initialValues.name);
    setAppID(initialValues.appID);
    setErrors({});
  };
  const validations = {
    displayName: [],
    name: [],
    appID: [{ type: "Required" }],
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
          appID,
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
          await DataStore.save(new Role(modelFields));
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
      {...getOverrideProps(overrides, "RoleCreateForm")}
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
              appID,
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
              appID,
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
              appID: value,
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
