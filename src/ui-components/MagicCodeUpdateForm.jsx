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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MagicCode } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MagicCodeUpdateForm(props) {
  const {
    id: idProp,
    magicCode: magicCodeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    parameters: "",
    titleText: "",
    descriptionText: "",
    apiAlias: "",
    apiResource: "",
  };
  const [parameters, setParameters] = React.useState(initialValues.parameters);
  const [titleText, setTitleText] = React.useState(initialValues.titleText);
  const [descriptionText, setDescriptionText] = React.useState(
    initialValues.descriptionText
  );
  const [apiAlias, setApiAlias] = React.useState(initialValues.apiAlias);
  const [apiResource, setApiResource] = React.useState(
    initialValues.apiResource
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = magicCodeRecord
      ? { ...initialValues, ...magicCodeRecord }
      : initialValues;
    setParameters(
      typeof cleanValues.parameters === "string"
        ? cleanValues.parameters
        : JSON.stringify(cleanValues.parameters)
    );
    setTitleText(cleanValues.titleText);
    setDescriptionText(cleanValues.descriptionText);
    setApiAlias(cleanValues.apiAlias);
    setApiResource(cleanValues.apiResource);
    setErrors({});
  };
  const [magicCodeRecord, setMagicCodeRecord] =
    React.useState(magicCodeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MagicCode, idProp)
        : magicCodeModelProp;
      setMagicCodeRecord(record);
    };
    queryData();
  }, [idProp, magicCodeModelProp]);
  React.useEffect(resetStateValues, [magicCodeRecord]);
  const validations = {
    parameters: [{ type: "JSON" }],
    titleText: [{ type: "Required" }],
    descriptionText: [],
    apiAlias: [{ type: "Required" }],
    apiResource: [{ type: "Required" }],
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
          parameters,
          titleText,
          descriptionText,
          apiAlias,
          apiResource,
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
          const modelFieldsToSave = {
            titleText: modelFields.titleText,
            descriptionText: modelFields.descriptionText,
            apiAlias: modelFields.apiAlias,
            apiResource: modelFields.apiResource,
            parameters: modelFields.parameters
              ? JSON.parse(modelFields.parameters)
              : modelFields.parameters,
          };
          await DataStore.save(
            MagicCode.copyOf(magicCodeRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
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
      {...getOverrideProps(overrides, "MagicCodeUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Parameters"
        isRequired={false}
        isReadOnly={false}
        value={parameters}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parameters: value,
              titleText,
              descriptionText,
              apiAlias,
              apiResource,
            };
            const result = onChange(modelFields);
            value = result?.parameters ?? value;
          }
          if (errors.parameters?.hasError) {
            runValidationTasks("parameters", value);
          }
          setParameters(value);
        }}
        onBlur={() => runValidationTasks("parameters", parameters)}
        errorMessage={errors.parameters?.errorMessage}
        hasError={errors.parameters?.hasError}
        {...getOverrideProps(overrides, "parameters")}
      ></TextAreaField>
      <TextField
        label="Title text"
        isRequired={true}
        isReadOnly={false}
        value={titleText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parameters,
              titleText: value,
              descriptionText,
              apiAlias,
              apiResource,
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
              parameters,
              titleText,
              descriptionText: value,
              apiAlias,
              apiResource,
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
        isRequired={true}
        isReadOnly={false}
        value={apiAlias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parameters,
              titleText,
              descriptionText,
              apiAlias: value,
              apiResource,
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
      <TextField
        label="Api resource"
        isRequired={true}
        isReadOnly={false}
        value={apiResource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parameters,
              titleText,
              descriptionText,
              apiAlias,
              apiResource: value,
            };
            const result = onChange(modelFields);
            value = result?.apiResource ?? value;
          }
          if (errors.apiResource?.hasError) {
            runValidationTasks("apiResource", value);
          }
          setApiResource(value);
        }}
        onBlur={() => runValidationTasks("apiResource", apiResource)}
        errorMessage={errors.apiResource?.errorMessage}
        hasError={errors.apiResource?.hasError}
        {...getOverrideProps(overrides, "apiResource")}
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
          isDisabled={!(idProp || magicCodeModelProp)}
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
              !(idProp || magicCodeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
