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
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    gender: "",
    avatarImageURL: "",
    avatarUrl: "",
    email: "",
    cognitoId: "",
    avatarKey: "",
    language: "",
    sessionID: "",
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [avatarImageURL, setAvatarImageURL] = React.useState(
    initialValues.avatarImageURL
  );
  const [avatarUrl, setAvatarUrl] = React.useState(initialValues.avatarUrl);
  const [email, setEmail] = React.useState(initialValues.email);
  const [cognitoId, setCognitoId] = React.useState(initialValues.cognitoId);
  const [avatarKey, setAvatarKey] = React.useState(initialValues.avatarKey);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [sessionID, setSessionID] = React.useState(initialValues.sessionID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setUserName(cleanValues.userName);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setGender(cleanValues.gender);
    setAvatarImageURL(cleanValues.avatarImageURL);
    setAvatarUrl(cleanValues.avatarUrl);
    setEmail(cleanValues.email);
    setCognitoId(cleanValues.cognitoId);
    setAvatarKey(cleanValues.avatarKey);
    setLanguage(cleanValues.language);
    setSessionID(cleanValues.sessionID);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    userName: [],
    firstName: [],
    lastName: [],
    gender: [],
    avatarImageURL: [],
    avatarUrl: [],
    email: [{ type: "Email" }],
    cognitoId: [],
    avatarKey: [],
    language: [],
    sessionID: [],
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
          userName,
          firstName,
          lastName,
          gender,
          avatarImageURL,
          avatarUrl,
          email,
          cognitoId,
          avatarKey,
          language,
          sessionID,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
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
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
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
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
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
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
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
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
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
        label="Avatar image url"
        isRequired={false}
        isReadOnly={false}
        value={avatarImageURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL: value,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
            };
            const result = onChange(modelFields);
            value = result?.avatarImageURL ?? value;
          }
          if (errors.avatarImageURL?.hasError) {
            runValidationTasks("avatarImageURL", value);
          }
          setAvatarImageURL(value);
        }}
        onBlur={() => runValidationTasks("avatarImageURL", avatarImageURL)}
        errorMessage={errors.avatarImageURL?.errorMessage}
        hasError={errors.avatarImageURL?.hasError}
        {...getOverrideProps(overrides, "avatarImageURL")}
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
              avatarImageURL,
              avatarUrl: value,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL,
              avatarUrl,
              email: value,
              cognitoId,
              avatarKey,
              language,
              sessionID,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Cognito id"
        isRequired={false}
        isReadOnly={false}
        value={cognitoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId: value,
              avatarKey,
              language,
              sessionID,
            };
            const result = onChange(modelFields);
            value = result?.cognitoId ?? value;
          }
          if (errors.cognitoId?.hasError) {
            runValidationTasks("cognitoId", value);
          }
          setCognitoId(value);
        }}
        onBlur={() => runValidationTasks("cognitoId", cognitoId)}
        errorMessage={errors.cognitoId?.errorMessage}
        hasError={errors.cognitoId?.hasError}
        {...getOverrideProps(overrides, "cognitoId")}
      ></TextField>
      <TextField
        label="Avatar key"
        isRequired={false}
        isReadOnly={false}
        value={avatarKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey: value,
              language,
              sessionID,
            };
            const result = onChange(modelFields);
            value = result?.avatarKey ?? value;
          }
          if (errors.avatarKey?.hasError) {
            runValidationTasks("avatarKey", value);
          }
          setAvatarKey(value);
        }}
        onBlur={() => runValidationTasks("avatarKey", avatarKey)}
        errorMessage={errors.avatarKey?.errorMessage}
        hasError={errors.avatarKey?.hasError}
        {...getOverrideProps(overrides, "avatarKey")}
      ></TextField>
      <SelectField
        label="Language"
        placeholder="Please select an option"
        isDisabled={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language: value,
              sessionID,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      >
        <option
          children="Chinese"
          value="CHINESE"
          {...getOverrideProps(overrides, "languageoption0")}
        ></option>
        <option
          children="Danish"
          value="DANISH"
          {...getOverrideProps(overrides, "languageoption1")}
        ></option>
        <option
          children="Dutch"
          value="DUTCH"
          {...getOverrideProps(overrides, "languageoption2")}
        ></option>
        <option
          children="English"
          value="ENGLISH"
          {...getOverrideProps(overrides, "languageoption3")}
        ></option>
        <option
          children="Finnish"
          value="FINNISH"
          {...getOverrideProps(overrides, "languageoption4")}
        ></option>
        <option
          children="French"
          value="FRENCH"
          {...getOverrideProps(overrides, "languageoption5")}
        ></option>
        <option
          children="German"
          value="GERMAN"
          {...getOverrideProps(overrides, "languageoption6")}
        ></option>
        <option
          children="Italian"
          value="ITALIAN"
          {...getOverrideProps(overrides, "languageoption7")}
        ></option>
        <option
          children="Japanese"
          value="JAPANESE"
          {...getOverrideProps(overrides, "languageoption8")}
        ></option>
        <option
          children="Norwegian"
          value="NORWEGIAN"
          {...getOverrideProps(overrides, "languageoption9")}
        ></option>
        <option
          children="Portuguese"
          value="PORTUGUESE"
          {...getOverrideProps(overrides, "languageoption10")}
        ></option>
        <option
          children="Spanish"
          value="SPANISH"
          {...getOverrideProps(overrides, "languageoption11")}
        ></option>
        <option
          children="Swedish"
          value="SWEDISH"
          {...getOverrideProps(overrides, "languageoption12")}
        ></option>
      </SelectField>
      <TextField
        label="Session id"
        isRequired={false}
        isReadOnly={false}
        value={sessionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              gender,
              avatarImageURL,
              avatarUrl,
              email,
              cognitoId,
              avatarKey,
              language,
              sessionID: value,
            };
            const result = onChange(modelFields);
            value = result?.sessionID ?? value;
          }
          if (errors.sessionID?.hasError) {
            runValidationTasks("sessionID", value);
          }
          setSessionID(value);
        }}
        onBlur={() => runValidationTasks("sessionID", sessionID)}
        errorMessage={errors.sessionID?.errorMessage}
        hasError={errors.sessionID?.hasError}
        {...getOverrideProps(overrides, "sessionID")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
