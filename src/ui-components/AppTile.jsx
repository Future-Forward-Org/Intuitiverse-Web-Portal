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
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function AppTile(props) {
  const { app, userID, user, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Name: {},
        Description: {},
        Info: {},
        Button: {},
        AppTile: {},
      },
      variantValues: { visibility: "enabled" },
    },
    {
      overrides: {
        Name: { color: "rgba(128,128,128,1)", height: "28px", shrink: "0" },
        Description: { color: "rgba(128,128,128,1)" },
        Info: {},
        Button: { height: "unset", isDisabled: "true" },
        AppTile: {},
      },
      variantValues: { visibility: "disabled" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"/app/"}${app?.id}${"/"}${userID}`,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="287px"
      height="181px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "AppTile")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="92px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Info")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
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
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={app?.name}
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
          children={app?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="33px"
        alignItems="flex-start"
        borderRadius="20px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Continue"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
