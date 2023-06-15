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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, useBreakpointValue } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { rightSide, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      variantValues: { breakpoint: "xl" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: {},
        Avatar: {},
        LogoutButton: {},
        HamburgerMenuClosed: {},
        RightSide: {},
        NavBar: {},
      },
    },
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: {},
        Avatar: {},
        LogoutButton: {},
        HamburgerMenuClosed: {},
        RightSide: {},
        NavBar: { width: "992px" },
      },
    },
    {
      variantValues: { breakpoint: "medium" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: {},
        Avatar: {},
        LogoutButton: {},
        HamburgerMenuClosed: {},
        RightSide: {},
        NavBar: { width: "768px" },
      },
    },
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: {},
        Avatar: {},
        LogoutButton: {},
        HamburgerMenuClosed: {},
        RightSide: {},
        NavBar: { width: "480px" },
      },
    },
    {
      variantValues: { breakpoint: "base" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: { display: "none", width: "110px", height: "20.63px" },
        Avatar: {},
        LogoutButton: {},
        HamburgerMenuClosed: {},
        RightSide: { shrink: "1", grow: "1", basis: "0", alignSelf: "stretch" },
        NavBar: {
          width: "400px",
          height: "72px",
          justifyContent: "flex-start",
        },
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
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          children="Intuitive User Portal"
          onClick={() => {
            homeButtonOnClick();
          }}
          {...getOverrideProps(overrides, "HomeButton")}
        ></Button>
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
        children={rightSide}
        {...getOverrideProps(overrides, "RightSide")}
      ></Flex>
    </Flex>
  );
}
