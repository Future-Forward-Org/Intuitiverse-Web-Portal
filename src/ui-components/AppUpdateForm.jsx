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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { App } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AppUpdateForm(props) {
  const {
    id: idProp,
    app: appModelProp,
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
    isEnabled: false,
    description: "",
    buttonName: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [isEnabled, setIsEnabled] = React.useState(initialValues.isEnabled);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [buttonName, setButtonName] = React.useState(initialValues.buttonName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = appRecord
      ? { ...initialValues, ...appRecord }
      : initialValues;
    setName(cleanValues.name);
    setIsEnabled(cleanValues.isEnabled);
    setDescription(cleanValues.description);
    setButtonName(cleanValues.buttonName);
    setErrors({});
  };
  const [appRecord, setAppRecord] = React.useState(appModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(App, idProp) : appModelProp;
      setAppRecord(record);
    };
    queryData();
  }, [idProp, appModelProp]);
  React.useEffect(resetStateValues, [appRecord]);
  const validations = {
    name: [],
    isEnabled: [],
    description: [],
    buttonName: [],
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
          isEnabled,
          description,
          buttonName,
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
            App.copyOf(appRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AppUpdateForm")}
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
              isEnabled,
              description,
              buttonName,
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
      <SwitchField
        label="Is enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              isEnabled: value,
              description,
              buttonName,
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
              isEnabled,
              description: value,
              buttonName,
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
              isEnabled,
              description,
              buttonName: value,
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
          isDisabled={!(idProp || appModelProp)}
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
              !(idProp || appModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
