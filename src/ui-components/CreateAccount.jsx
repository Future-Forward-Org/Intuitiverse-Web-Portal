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
  Heading,
  PasswordField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateAccount(props) {
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
  const { tokens } = useTheme();
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    gender: "",
    avatarUrl: "",
    Required: {},
    Optional: {},
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [avatarUrl, setAvatarUrl] = React.useState(initialValues.avatarUrl);
  const [required, setRequired] = React.useState(initialValues.Required);
  const [optional, setOptional] = React.useState(initialValues.Optional);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserName(initialValues.userName);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setGender(initialValues.gender);
    setAvatarUrl(initialValues.avatarUrl);
    setRequired(initialValues.Required);
    setOptional(initialValues.Optional);
    setErrors({});
  };
  const validations = {
    userName: [],
    firstName: [],
    lastName: [],
    gender: [],
    avatarUrl: [],
    "Required.emailAddress": [{ type: "Email" }],
    "Required.password": [],
    "Required.confirmPassword": [],
    "Optional.firstName": [],
    "Optional.lastName": [],
    "Optional.gender": [],
    "Optional.avatarURL": [],
    "Optional.role": [],
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
      rowGap={tokens.space.small.value}
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userName,
          firstName,
          lastName,
          gender,
          avatarUrl,
          Required: required,
          Optional: optional,
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
            userName: modelFields.userName,
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            gender: modelFields.gender,
            avatarUrl: modelFields.avatarUrl,
          };
          await DataStore.save(new User(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "CreateAccount")}
      {...rest}
    >
      <Heading
        level={3}
        children="Required"
        {...getOverrideProps(overrides, "Required")}
      ></Heading>
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName: value,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName: value,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName: value,
              gender,
              avatarUrl,
              Required: required,
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender: value,
              avatarUrl,
              Required: required,
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Avatar url"
        isRequired={false}
        isReadOnly={false}
        value={avatarUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl: value,
              Required: required,
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.avatarUrl ?? value;
          }
          if (errors.avatarUrl?.hasError) {
            runValidationTasks("avatarUrl", value);
          }
          setAvatarUrl(value);
        }}
        onBlur={() => runValidationTasks("avatarUrl", avatarUrl)}
        errorMessage={errors.avatarUrl?.errorMessage}
        hasError={errors.avatarUrl?.hasError}
        {...getOverrideProps(overrides, "avatarUrl")}
      ></TextField>
      <TextField
        label="Email address"
        value={required}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: { ...Required, emailAddress: value },
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.Required?.emailAddress ?? value;
          }
          if (errors["Required.emailAddress"]?.hasError) {
            runValidationTasks("Required.emailAddress", value);
          }
          setRequired(value);
        }}
        onBlur={() =>
          runValidationTasks("Required.emailAddress", Required["emailAddress"])
        }
        errorMessage={errors["Required.emailAddress"]?.errorMessage}
        hasError={errors["Required.emailAddress"]?.hasError}
        {...getOverrideProps(overrides, "Required.emailAddress")}
      ></TextField>
      <PasswordField
        label="Password"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: { ...Required, password: value },
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.Required?.password ?? value;
          }
          if (errors["Required.password"]?.hasError) {
            runValidationTasks("Required.password", value);
          }
          setRequired(value);
        }}
        onBlur={() =>
          runValidationTasks("Required.password", Required["password"])
        }
        errorMessage={errors["Required.password"]?.errorMessage}
        hasError={errors["Required.password"]?.hasError}
        {...getOverrideProps(overrides, "Required.password")}
      ></PasswordField>
      <PasswordField
        label="Confirm password"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: { ...Required, confirmPassword: value },
              Optional: optional,
            };
            const result = onChange(modelFields);
            value = result?.Required?.confirmPassword ?? value;
          }
          if (errors["Required.confirmPassword"]?.hasError) {
            runValidationTasks("Required.confirmPassword", value);
          }
          setRequired(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Required.confirmPassword",
            Required["confirmPassword"]
          )
        }
        errorMessage={errors["Required.confirmPassword"]?.errorMessage}
        hasError={errors["Required.confirmPassword"]?.hasError}
        {...getOverrideProps(overrides, "Required.confirmPassword")}
      ></PasswordField>
      <Heading
        level={3}
        children="Optional"
        {...getOverrideProps(overrides, "Optional")}
      ></Heading>
      <TextField
        label="First name"
        value={optional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: { ...Optional, firstName: value },
            };
            const result = onChange(modelFields);
            value = result?.Optional?.firstName ?? value;
          }
          if (errors["Optional.firstName"]?.hasError) {
            runValidationTasks("Optional.firstName", value);
          }
          setOptional(value);
        }}
        onBlur={() =>
          runValidationTasks("Optional.firstName", Optional["firstName"])
        }
        errorMessage={errors["Optional.firstName"]?.errorMessage}
        hasError={errors["Optional.firstName"]?.hasError}
        {...getOverrideProps(overrides, "Optional.firstName")}
      ></TextField>
      <TextField
        label="Last name"
        value={optional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: { ...Optional, lastName: value },
            };
            const result = onChange(modelFields);
            value = result?.Optional?.lastName ?? value;
          }
          if (errors["Optional.lastName"]?.hasError) {
            runValidationTasks("Optional.lastName", value);
          }
          setOptional(value);
        }}
        onBlur={() =>
          runValidationTasks("Optional.lastName", Optional["lastName"])
        }
        errorMessage={errors["Optional.lastName"]?.errorMessage}
        hasError={errors["Optional.lastName"]?.hasError}
        {...getOverrideProps(overrides, "Optional.lastName")}
      ></TextField>
      <TextField
        label="Gender"
        value={optional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: { ...Optional, gender: value },
            };
            const result = onChange(modelFields);
            value = result?.Optional?.gender ?? value;
          }
          if (errors["Optional.gender"]?.hasError) {
            runValidationTasks("Optional.gender", value);
          }
          setOptional(value);
        }}
        onBlur={() => runValidationTasks("Optional.gender", Optional["gender"])}
        errorMessage={errors["Optional.gender"]?.errorMessage}
        hasError={errors["Optional.gender"]?.hasError}
        {...getOverrideProps(overrides, "Optional.gender")}
      ></TextField>
      <TextField
        label="Avatar url"
        value={optional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: { ...Optional, avatarURL: value },
            };
            const result = onChange(modelFields);
            value = result?.Optional?.avatarURL ?? value;
          }
          if (errors["Optional.avatarURL"]?.hasError) {
            runValidationTasks("Optional.avatarURL", value);
          }
          setOptional(value);
        }}
        onBlur={() =>
          runValidationTasks("Optional.avatarURL", Optional["avatarURL"])
        }
        errorMessage={errors["Optional.avatarURL"]?.errorMessage}
        hasError={errors["Optional.avatarURL"]?.hasError}
        {...getOverrideProps(overrides, "Optional.avatarURL")}
      ></TextField>
      <TextField
        label="Role"
        value={optional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarUrl,
              Required: required,
              Optional: { ...Optional, role: value },
            };
            const result = onChange(modelFields);
            value = result?.Optional?.role ?? value;
          }
          if (errors["Optional.role"]?.hasError) {
            runValidationTasks("Optional.role", value);
          }
          setOptional(value);
        }}
        onBlur={() => runValidationTasks("Optional.role", Optional["role"])}
        errorMessage={errors["Optional.role"]?.errorMessage}
        hasError={errors["Optional.role"]?.hasError}
        {...getOverrideProps(overrides, "Optional.role")}
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
