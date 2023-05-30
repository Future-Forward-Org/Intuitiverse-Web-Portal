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
export default function CurrentApp(props) {
  const {
    app,
    appID,
    magicCode,
    rightSide,
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      variantValues: { breakpoint: "xl" },
      overrides: {
        "Current App": {},
        "Current App Description": {},
        Card: {},
        LeftSide: {},
        MagicCodeInput: {},
        RightSide: {},
        CurrentApp: {},
      },
    },
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        "Current App": {},
        "Current App Description": {},
        Card: {},
        LeftSide: {},
        MagicCodeInput: {},
        RightSide: {},
        CurrentApp: { width: "992px" },
      },
    },
    {
      variantValues: { breakpoint: "medium" },
      overrides: {
        "Current App": {},
        "Current App Description": {},
        Card: {},
        LeftSide: {},
        MagicCodeInput: {},
        RightSide: {},
        CurrentApp: { width: "768px" },
      },
    },
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        "Current App": {},
        "Current App Description": {
          width: "429px",
          shrink: "0",
          children: "Learn Xi PSC skills in a lab at Sunnyvale. ",
        },
        Card: { shrink: "0" },
        LeftSide: { direction: "column", shrink: "0" },
        MagicCodeInput: { width: "unset", alignSelf: "stretch" },
        RightSide: {
          gap: "8px",
          direction: "column",
          justifyContent: "center",
        },
        CurrentApp: { gap: "16px", direction: "column", width: "480px" },
      },
    },
    {
      variantValues: { breakpoint: "base" },
      overrides: {
        "Current App": {},
        "Current App Description": {
          width: "429px",
          shrink: "0",
          children: "Learn Xi PSC skills in a lab at Sunnyvale. ",
        },
        Card: { shrink: "0" },
        LeftSide: { direction: "column", shrink: "0" },
        MagicCodeInput: { width: "unset", alignSelf: "stretch" },
        RightSide: {
          gap: "8px",
          direction: "column",
          justifyContent: "center",
        },
        CurrentApp: { gap: "16px", direction: "column", width: "400px" },
      },
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
      {...getOverrideProps(overrides, "CurrentApp")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "LeftSide")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="16px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Card")}
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
            children={app?.name}
            {...getOverrideProps(overrides, "Current App")}
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
            width="600px"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={app?.description}
            {...getOverrideProps(overrides, "Current App Description")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        children={rightSide}
        {...getOverrideProps(overrides, "RightSide")}
      ></Flex>
    </Flex>
  );
}
