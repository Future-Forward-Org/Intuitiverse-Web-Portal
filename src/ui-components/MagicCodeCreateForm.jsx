/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MagicCode } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MagicCodeCreateForm(props) {
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
    titleText: "",
    descriptionText: "",
    apiAlias: "",
  };
  const [titleText, setTitleText] = React.useState(initialValues.titleText);
  const [descriptionText, setDescriptionText] = React.useState(
    initialValues.descriptionText
  );
  const [apiAlias, setApiAlias] = React.useState(initialValues.apiAlias);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitleText(initialValues.titleText);
    setDescriptionText(initialValues.descriptionText);
    setApiAlias(initialValues.apiAlias);
    setErrors({});
  };
  const validations = {
    titleText: [],
    descriptionText: [],
    apiAlias: [],
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
          titleText,
          descriptionText,
          apiAlias,
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
          await DataStore.save(new MagicCode(modelFields));
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
      {...getOverrideProps(overrides, "MagicCodeCreateForm")}
      {...rest}
    >
      <TextField
        label="Title text"
        isRequired={false}
        isReadOnly={false}
        value={titleText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleText: value,
              descriptionText,
              apiAlias,
            };
            const result = onChange(modelFields);
            value = result?.titleText ?? value;
          }
          if (errors.titleText?.hasError) {
            runValidationTasks("titleText", value);
          }
          setTitleText(value);
        }}
        onBlur={() => runValidationTasks("titleText", titleText)}
        errorMessage={errors.titleText?.errorMessage}
        hasError={errors.titleText?.hasError}
        {...getOverrideProps(overrides, "titleText")}
      ></TextField>
      <TextField
        label="Description text"
        isRequired={false}
        isReadOnly={false}
        value={descriptionText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleText,
              descriptionText: value,
              apiAlias,
            };
            const result = onChange(modelFields);
            value = result?.descriptionText ?? value;
          }
          if (errors.descriptionText?.hasError) {
            runValidationTasks("descriptionText", value);
          }
          setDescriptionText(value);
        }}
        onBlur={() => runValidationTasks("descriptionText", descriptionText)}
        errorMessage={errors.descriptionText?.errorMessage}
        hasError={errors.descriptionText?.hasError}
        {...getOverrideProps(overrides, "descriptionText")}
      ></TextField>
      <TextField
        label="Api alias"
        isRequired={false}
        isReadOnly={false}
        value={apiAlias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleText,
              descriptionText,
              apiAlias: value,
            };
            const result = onChange(modelFields);
            value = result?.apiAlias ?? value;
          }
          if (errors.apiAlias?.hasError) {
            runValidationTasks("apiAlias", value);
          }
          setApiAlias(value);
        }}
        onBlur={() => runValidationTasks("apiAlias", apiAlias)}
        errorMessage={errors.apiAlias?.errorMessage}
        hasError={errors.apiAlias?.hasError}
        {...getOverrideProps(overrides, "apiAlias")}
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
