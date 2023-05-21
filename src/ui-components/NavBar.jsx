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
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      variantValues: { breakpoint: "xl" },
      overrides: {
        "Intuitive User Portal": {},
        HomeButton: {},
        Links: {},
        LeftSide: {},
        LogoutButton: {},
        RightSide: {},
        NavBar: {},
      },
    },
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        "Intuitive User Portal": {},
        HomeButton: {},
        Links: {},
        LeftSide: {},
        LogoutButton: {},
        RightSide: {},
        NavBar: { width: "992px" },
      },
    },
    {
      variantValues: { breakpoint: "medium" },
      overrides: {
        "Intuitive User Portal": {},
        HomeButton: {},
        Links: {},
        LeftSide: {},
        LogoutButton: {},
        RightSide: {},
        NavBar: { width: "768px" },
      },
    },
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        "Intuitive User Portal": {},
        HomeButton: {},
        Links: {},
        LeftSide: {},
        LogoutButton: {},
        RightSide: {},
        NavBar: { width: "480px" },
      },
    },
    {
      variantValues: { breakpoint: "base" },
      overrides: {
        "Intuitive User Portal": {},
        HomeButton: {},
        Links: { display: "none" },
        LeftSide: {},
        LogoutButton: {},
        RightSide: {},
        NavBar: { width: "400px" },
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
  const homeButtonOnClick = useNavigateAction({ type: "url", url: "/" });
  const logoutButtonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1280px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(242,243,245,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
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
          textTransform="capitalize"
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
          children="Intuitive User Portal"
          {...getOverrideProps(overrides, "Intuitive User Portal")}
        ></Text>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Links")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Home"
            onClick={() => {
              homeButtonOnClick();
            }}
            {...getOverrideProps(overrides, "HomeButton")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "RightSide")}
      >
        <Button
          width="unset"
          height="unset"
          borderRadius="20px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Logout"
          onClick={() => {
            logoutButtonOnClick();
          }}
          {...getOverrideProps(overrides, "LogoutButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
