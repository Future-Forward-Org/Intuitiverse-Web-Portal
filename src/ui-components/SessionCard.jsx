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
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function SessionCard(props) {
  const {
    session,
    sessionTime,
    user,
    attendees,
    sessionButton,
    userID,
    sessionDate,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: { visibility: "enabled" },
      overrides: {
        Name1092751: {},
        Name1092750: {},
        TitleFrame: {},
        Badge: {},
        Name1092772: {},
        TimeFrame: {},
        Button: {},
        SessionCard: {},
      },
    },
    {
      variantValues: { visibility: "disabled" },
      overrides: {
        Name1092751: {},
        Name1092750: {},
        TitleFrame: {},
        Badge: {},
        Name1092772: {},
        TimeFrame: {},
        Button: { isDisabled: "true", children: "Continue" },
        SessionCard: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SessionCard")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "TitleFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(37,38,41,1)"
          lineHeight="28px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="223px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={session?.name}
          {...getOverrideProps(overrides, "Name1092751")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(37,38,41,1)"
          lineHeight="21px"
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
          children={`${"Session Code: "}${session?.sessionCode}`}
          {...getOverrideProps(overrides, "Name1092750")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "TimeFrame")}
      >
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="default"
          children={sessionDate}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(37,38,41,1)"
          lineHeight="28px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="223px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sessionTime}
          {...getOverrideProps(overrides, "Name1092772")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        borderRadius="20px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Edit"
        onClick={sessionButton}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
