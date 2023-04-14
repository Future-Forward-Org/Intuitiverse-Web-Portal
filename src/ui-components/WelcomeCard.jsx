/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import MagicCode from "./MagicCode";
export default function WelcomeCard(props) {
  const { userID, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Welcome: {},
        "User Info": {},
        LeftSide: {},
        MagicCode: {},
        RightSide: {},
        WelcomeCard: {},
      },
      variantValues: { breakpoint: "xl" },
    },
    {
      overrides: {
        Welcome: { width: "534px" },
        "User Info": {},
        LeftSide: {},
        MagicCode: {},
        RightSide: {},
        WelcomeCard: { width: "992px" },
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        Welcome: { width: "369px" },
        "User Info": { width: "350px" },
        LeftSide: {},
        MagicCode: {},
        RightSide: {},
        WelcomeCard: { width: "768px" },
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Welcome: { width: "416px" },
        "User Info": { width: "400px" },
        LeftSide: { width: "416px" },
        MagicCode: {},
        RightSide: {
          alignItems: "flex-start",
          shrink: "0",
          alignSelf: "stretch",
        },
        WelcomeCard: { gap: "16px", direction: "column", width: "480px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        Welcome: { width: "348px" },
        "User Info": { width: "348px" },
        LeftSide: {},
        MagicCode: {},
        RightSide: {
          alignItems: "flex-start",
          shrink: "0",
          alignSelf: "stretch",
        },
        WelcomeCard: { gap: "16px", direction: "column", width: "400px" },
      },
      variantValues: { breakpoint: "base" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "base",
    small: "small",
    medium: "medium",
    large: "large",
    xl: "xl",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1280px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(242,243,245,1)"
      display="flex"
      {...getOverrideProps(overrides, "WelcomeCard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "LeftSide")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Welcome, "}${userID}`}
          {...getOverrideProps(overrides, "Welcome")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="600px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This area can be used to display basic information about the purpose of the site and / or information about the user "
          {...getOverrideProps(overrides, "User Info")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "RightSide")}
      >
        <MagicCode
          display="flex"
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="16px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "MagicCode")}
        ></MagicCode>
      </Flex>
    </Flex>
  );
}
