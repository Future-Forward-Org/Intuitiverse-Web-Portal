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
import {
  Button,
  Flex,
  Icon,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import HamburgerMenuClosed from "./HamburgerMenuClosed";
export default function NavBar(props) {
  const { user, ProfileButton, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      variantValues: { breakpoint: "xl" },
      overrides: {
        HomeButton: {},
        LeftSide: {},
        UserName: {},
        Background: {},
        icon_user: {},
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
        Background: {},
        icon_user: {},
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
        Background: {
          viewBox: { minX: 0, minY: 0, width: 40, height: 41.26061248779297 },
        },
        icon_user: {},
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
        Background: {},
        icon_user: {},
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
        Background: {
          viewBox: { minX: 0, minY: 0, width: 40, height: 41.2606201171875 },
        },
        icon_user: {},
        Avatar: { display: "none" },
        LogoutButton: {},
        HamburgerMenuClosed: { display: "block" },
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
        {...getOverrideProps(overrides, "RightSide")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(32,33,36,1)"
          lineHeight="20px"
          textAlign="right"
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
          children={user?.firstName}
          {...getOverrideProps(overrides, "UserName")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="40px"
          height="41.26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          onClick={ProfileButton}
          {...getOverrideProps(overrides, "Avatar")}
        >
          <Icon
            width="40px"
            height="41.26px"
            viewBox={{ minX: 0, minY: 0, width: 40, height: 41.26060485839844 }}
            paths={[
              {
                d: "M40 20.6303C40 32.0241 31.0457 41.2606 20 41.2606C8.9543 41.2606 0 32.0241 0 20.6303C0 9.2365 8.9543 0 20 0C31.0457 0 40 9.2365 40 20.6303Z",
                fill: "rgba(223,225,231,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Background")}
          ></Icon>
          <View
            width="24px"
            height="24.76px"
            {...getOverrideProps(overrides, "icon_user")}
          ></View>
        </Flex>
        <Button
          width="unset"
          height="unset"
          borderRadius="20px"
          display="none"
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
        <HamburgerMenuClosed
          width="40px"
          height="unset"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HamburgerMenuClosed")}
        ></HamburgerMenuClosed>
      </Flex>
    </Flex>
  );
}
