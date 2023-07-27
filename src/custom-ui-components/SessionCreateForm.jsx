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
import { Session, User, SessionUserAttendee } from "../models";
import { fetchByPath, validateField} from "../ui-components/utils";
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
                                            d:
                                                "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
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
        userId = "",
        overrides,
        ...rest
    } = props;

    const initialValues = {
        name: "",
        description: "",
        dateTime: "",
        attendees: [],
        duration: "",
    };

    const [name, setName] = React.useState(initialValues.name);
    const [excludedUserList, setExcludedUserList] = React.useState("");
    const [description, setDescription] = React.useState(
        initialValues.description
    );
    const [dateTime, setDateTime] = React.useState(initialValues.dateTime);
    const [attendees, setAttendees] = React.useState(initialValues.attendees);
    const [duration, setDuration] = React.useState(initialValues.duration);
    const [errors, setErrors] = React.useState({});

    const resetStateValues = () => {
        setName(initialValues.name);
        setDescription(initialValues.description);
        setDateTime(initialValues.dateTime);
        setAttendees(initialValues.attendees);
        setDuration(initialValues.duration);
        setCurrentAttendeesValue(undefined);
        setCurrentAttendeesDisplayValue("");
        setErrors({});
    };

    const [currentAttendeesDisplayValue, setCurrentAttendeesDisplayValue] =
        React.useState("");
    const [currentAttendeesValue, setCurrentAttendeesValue] = React.useState(
        undefined
    );

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
        dateTime: [{ type: "Required" }, {type: "BeAfter", strValues: [Date.now().toString()], validationMessage: "Meeting cannot start in the past"}],
        attendees: [{ type: "Required", validationMessage: "At least one attendee is required." }],
        duration: [{ type: "Required"}, { type: "GreaterThanNum",  numValues: [1], validationMessage: "Duration must be at least one minute long" }],
    };


    const runValidationTasks = async (fieldName, currentValue, getDisplayValue) => {
        const value =
            currentValue && getDisplayValue
                ? getDisplayValue(currentValue)
                : currentValue;

        let validationResponse = validateField(value, validations[fieldName]);

        const customValidator = fetchByPath(onValidate, fieldName);
        if (customValidator) {
            validationResponse = await customValidator(value, validationResponse);
        }
        //validationResponse = checkValidation(value, valueValidations[fieldName]);

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
                    description,
                    dateTime,
                    attendees,
                    duration,
                };

                if (modelFields.attendees === null || modelFields.attendees === undefined) {
                    modelFields.attendees = [];
                }

                const hostUser = userRecords.find((user) => user.id === userId);
                if (hostUser) {
                    modelFields.attendees.push(hostUser);
                }

                console.log(modelFields.toString());
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
                console.log(modelFields.toString());
                if (validationResponses.some((r) => r.hasError)) {
                    return;
                }

                if (onSubmit) {
                    modelFields = onSubmit(modelFields);
                }
                console.log(modelFields.toString());
                try {
                    Object.entries(modelFields).forEach(([key, value]) => {
                        if (typeof value === "string" && value.trim() === "") {
                            modelFields[key] = undefined;
                        }
                    });


                    let startDateTime = new Date(modelFields.dateTime);

                    let endDateTime = new Date(startDateTime.getTime() + modelFields.duration * 60000)

                    const modelFieldsToSave = {
                        name: modelFields.name,
                        description: modelFields.description,
                        startDateTime: startDateTime.toISOString(),
                        sessionCode: modelFields.sessionCode,
                        host: modelFields.host,
                        endDateTime: endDateTime.toISOString(),
                    };

                    console.log(modelFieldsToSave.startDateTime);
                    console.log(modelFieldsToSave.endDateTime);


                    const session = await DataStore.save(new Session(modelFieldsToSave));

                    const promises = [];

                    promises.push(
                        ...attendees.reduce((promises, user) => {
                            promises.push(
                                DataStore.save(
                                    new SessionUserAttendee({
                                        session,
                                        user,
                                    })
                                )
                            );
                            return promises;
                        }, [])
                    );

                    await Promise.all(promises);

                    const lastPromise = promises[promises.length - 1];
                    const lastModel = await lastPromise;

                    if (onSuccess) {
                        onSuccess(lastModel);
                    }

                    if (clearOnSuccess) {
                        resetStateValues();
                    }
                } catch (err) {
                    if (onError) {
                        onError(err.message);
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
                            dateTime,
                            attendees,
                            duration,
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
                            dateTime,
                            attendees,
                            duration,
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
            <span>Session Start Date and Time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
                }
                isRequired={true}
                isReadOnly={false}
                type="datetime-local"
                value={dateTime}
                onChange={(e) => {
                    let value = e.target.value;
                    if (onChange) {
                        const modelFields = {
                            name,
                            description,
                            dateTime: value,
                            attendees,
                            duration,
                        };
                        const result = onChange(modelFields);
                        value = result?.dateTime ?? value;
                    }
                    if (errors.dateTime?.hasError) {
                        runValidationTasks("dateTime", value);
                    }
                    setDateTime(value);
                }}
                onBlur={() => runValidationTasks("dateTime", dateTime)}
                errorMessage={errors.dateTime?.errorMessage}
                hasError={errors.dateTime?.hasError}
                {...getOverrideProps(overrides, "dateTime")}
            ></TextField>
            <TextField
                label="Session Duration (minutes)"
                isRequired={true}
                isReadOnly={false}
                value={duration}
                onChange={(e) => {
                    let { value } = e.target;
                    if (onChange) {
                        const modelFields = {
                            name,
                            description,
                            dateTime,
                            attendees,
                            duration: value,
                        };
                        const result = onChange(modelFields);
                        value = result?.duration ?? value;
                    }
                    if (errors.duration?.hasError) {
                        runValidationTasks("duration", value);
                    }
                    setDuration(value);
                }}
                onBlur={() => runValidationTasks("duration", duration)}
                errorMessage={errors.duration?.errorMessage}
                hasError={errors.duration?.hasError}
                {...getOverrideProps(overrides, "duration")}
            ></TextField>
            <ArrayField
                onChange={async (items) => {
                    let values = items;
                    if (onChange) {
                        const modelFields = {
                            name,
                            description,
                            dateTime,
                            attendees: values,
                            duration,
                        };
                        const result = onChange(modelFields);
                        values = result?.attendees ?? values;
                    }
                    setAttendees(values);
                    setCurrentAttendeesValue(undefined);
                    setCurrentAttendeesDisplayValue("");
                }}
                currentFieldValue={currentAttendeesValue}
                label={
                    <span style={{ display: "inline-flex" }}>
            <span>Attendees</span>
            <span style={{ color: "red" }}>*</span>
          </span>
                }
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
                    isRequired={true}
                    isReadOnly={false}
                    placeholder="Search for User by Email"
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
                        //if(!(value === undefined || value == null || val.length <= 0))
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
            <Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}>
                <Button
                    children="Clear"
                    type="reset"
                    onClick={(event) => {
                        event.preventDefault();
                        resetStateValues();
                    }}
                    {...getOverrideProps(overrides, "ClearButton")}
                ></Button>
                <Flex gap="15px" {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
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
