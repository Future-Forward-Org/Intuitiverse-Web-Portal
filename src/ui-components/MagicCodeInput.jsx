/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function MagicCodeInput(props) {
  const { magicCode, MagicCodeAuth, overrides, ...rest } = props;
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
        height="60px"
        justifyContent="flex-start"
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
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(37,38,41,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Enter the Code on your Device"
          {...getOverrideProps(overrides, "Description")}
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
        {...getOverrideProps(overrides, "Input")}
      >
        <TextField
          width="unset"
          height="unset"
          placeholder="000-000"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          opacity="0.4000000059604645"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
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
