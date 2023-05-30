/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Text, TextField } from "@aws-amplify/ui-react";
export default function MagicCodeInput(props) {
  const { magicCode, MagicCodeAuth, ErrorMessage, overrides, ...rest } = props;
  const [textFieldLabel, setTextFieldLabel] = useStateMutationAction(undefined);
  const inputOnClick = () => {
    setTextFieldLabel(ErrorMessage);
  };
  return (
    <Flex
      gap="0"
      direction="column"
      width="313px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      padding="0px 16px 0px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MagicCodeInput")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="281px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Info")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(37,38,41,1)"
          lineHeight="28px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={magicCode?.titleText}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        onClick={() => {
          inputOnClick();
        }}
        {...getOverrideProps(overrides, "Input")}
      >
        <TextField
          width="unset"
          height="40px"
          placeholder="000-000"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          opacity="0.4000000059604645"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          id="codeInputField"
          label={textFieldLabel}
          onChange={(event) => {
            setTextFieldLabel(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <Heading
          width="unset"
          height="25px"
          shrink="0"
          alignSelf="stretch"
          level="5"
          children={ErrorMessage}
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Button
          width="unset"
          height="35px"
          borderRadius="20px"
          padding="5px 0px 5px 0px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Enter Magic Code"
          onClick={MagicCodeAuth}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
