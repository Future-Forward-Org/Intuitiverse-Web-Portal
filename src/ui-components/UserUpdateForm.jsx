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
  Heading,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { User, Session as Session0, SessionUserAttendees } from "../models";
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
    language: "",
    avatarUrl: "",
    Session: [],
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [avatarUrl, setAvatarUrl] = React.useState(initialValues.avatarUrl);
  const [Session, setSession] = React.useState(initialValues.Session);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord, Session: linkedSession }
      : initialValues;
    setUserName(cleanValues.userName);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setLanguage(cleanValues.language);
    setAvatarUrl(cleanValues.avatarUrl);
    setSession(cleanValues.Session ?? []);
    setCurrentSessionValue(undefined);
    setCurrentSessionDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  const [linkedSession, setLinkedSession] = React.useState([]);
  const canUnlinkSession = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
      const linkedSession = record
        ? await Promise.all(
            (
              await record.Session.toArray()
            ).map((r) => {
              return r.session;
            })
          )
        : [];
      setLinkedSession(linkedSession);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord, linkedSession]);
  const [currentSessionDisplayValue, setCurrentSessionDisplayValue] =
    React.useState("");
  const [currentSessionValue, setCurrentSessionValue] =
    React.useState(undefined);
  const SessionRef = React.createRef();
  const getIDValue = {
    Session: (r) => JSON.stringify({ id: r?.id }),
  };
  const SessionIdSet = new Set(
    Array.isArray(Session)
      ? Session.map((r) => getIDValue.Session?.(r))
      : getIDValue.Session?.(Session)
  );
  const sessionRecords = useDataStoreBinding({
    type: "collection",
    model: Session0,
  }).items;
  const getDisplayValue = {
    Session: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    userName: [],
    firstName: [],
    lastName: [],
    language: [{ type: "Required" }],
    avatarUrl: [],
    Session: [],
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
          language,
          avatarUrl,
          Session,
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
          const sessionToLinkMap = new Map();
          const sessionToUnLinkMap = new Map();
          const sessionMap = new Map();
          const linkedSessionMap = new Map();
          Session.forEach((r) => {
            const count = sessionMap.get(getIDValue.Session?.(r));
            const newCount = count ? count + 1 : 1;
            sessionMap.set(getIDValue.Session?.(r), newCount);
          });
          linkedSession.forEach((r) => {
            const count = linkedSessionMap.get(getIDValue.Session?.(r));
            const newCount = count ? count + 1 : 1;
            linkedSessionMap.set(getIDValue.Session?.(r), newCount);
          });
          linkedSessionMap.forEach((count, id) => {
            const newCount = sessionMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                sessionToUnLinkMap.set(id, diffCount);
              }
            } else {
              sessionToUnLinkMap.set(id, count);
            }
          });
          sessionMap.forEach((count, id) => {
            const originalCount = linkedSessionMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                sessionToLinkMap.set(id, diffCount);
              }
            } else {
              sessionToLinkMap.set(id, count);
            }
          });
          sessionToUnLinkMap.forEach(async (count, id) => {
            const sessionUserAttendeesRecords = await DataStore.query(
              SessionUserAttendees,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.sessionId.eq(recordKeys.id),
                    r.userId.eq(userRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(sessionUserAttendeesRecords[i]));
            }
          });
          sessionToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new SessionUserAttendees({
                    user: userRecord,
                    session: sessionRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            userName: modelFields.userName,
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            language: modelFields.language,
            avatarUrl: modelFields.avatarUrl,
          };
          promises.push(
            DataStore.save(
              User.copyOf(userRecord, (updated) => {
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
              language,
              avatarUrl,
              Session,
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
              language,
              avatarUrl,
              Session,
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
              language,
              avatarUrl,
              Session,
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
              language: value,
              avatarUrl,
              Session,
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
          children="Spanish"
          value="SPANISH"
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
          children="Brazilianportuguese"
          value="BRAZILIANPORTUGUESE"
          {...getOverrideProps(overrides, "languageoption11")}
        ></option>
        <option
          children="Swedish"
          value="SWEDISH"
          {...getOverrideProps(overrides, "languageoption12")}
        ></option>
        <option
          children="Italian"
          value="ITALIAN"
          {...getOverrideProps(overrides, "languageoption13")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        children="Create your avatar at"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Heading
        children="https://demo.readyplayer.me/en/avatar"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
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
              language,
              avatarUrl: value,
              Session,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userName,
              firstName,
              lastName,
              language,
              avatarUrl,
              Session: values,
            };
            const result = onChange(modelFields);
            values = result?.Session ?? values;
          }
          setSession(values);
          setCurrentSessionValue(undefined);
          setCurrentSessionDisplayValue("");
        }}
        currentFieldValue={currentSessionValue}
        label={"Session"}
        items={Session}
        hasError={errors?.Session?.hasError}
        errorMessage={errors?.Session?.errorMessage}
        getBadgeText={getDisplayValue.Session}
        setFieldValue={(model) => {
          setCurrentSessionDisplayValue(
            model ? getDisplayValue.Session(model) : ""
          );
          setCurrentSessionValue(model);
        }}
        inputFieldRef={SessionRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Session"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Session"
          value={currentSessionDisplayValue}
          options={sessionRecords
            .filter((r) => !SessionIdSet.has(getIDValue.Session?.(r)))
            .map((r) => ({
              id: getIDValue.Session?.(r),
              label: getDisplayValue.Session?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSessionValue(
              sessionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSessionDisplayValue(label);
            runValidationTasks("Session", label);
          }}
          onClear={() => {
            setCurrentSessionDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Session?.hasError) {
              runValidationTasks("Session", value);
            }
            setCurrentSessionDisplayValue(value);
            setCurrentSessionValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Session", currentSessionDisplayValue)
          }
          errorMessage={errors.Session?.errorMessage}
          hasError={errors.Session?.hasError}
          ref={SessionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Session")}
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
