/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function MagicCode(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="16px"
      padding="32px 16px 32px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MagicCode")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="292px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(37,38,41,1)"
            lineHeight="28px"
            textAlign="left"
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
            children="AR/VR Device Login"
            {...getOverrideProps(overrides, "Name36602466")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Turn on your AR/VR  device and open the app to get the magic code"
            {...getOverrideProps(overrides, "Name36602465")}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          borderRadius="8px"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Enter Magic Code"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
