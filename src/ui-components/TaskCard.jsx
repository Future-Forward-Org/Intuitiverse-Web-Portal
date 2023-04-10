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
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function TaskCard(props) {
  const {
    task,
    taskStatus,
    user,
    app,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        Badge: {},
        Name36513131: {},
        Name36513136: {},
        "Frame 419": {},
        Button: {},
        TaskCard: {},
      },
      variantValues: { visibility: "enabled" },
    },
    {
      overrides: {
        Badge: { variation: "info", children: "In Progress" },
        Name36513131: { color: "rgba(128,128,128,1)" },
        Name36513136: { color: "rgba(128,128,128,1)" },
        "Frame 419": {},
        Button: { isDisabled: "true" },
        TaskCard: {},
      },
      variantValues: { visibility: "disabled" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
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
      {...getOverrideProps(overrides, "TaskCard")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children={taskStatus?.Progress}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
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
        {...getOverrideProps(overrides, "Frame 419")}
      >
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
          children={task?.type}
          {...getOverrideProps(overrides, "Name36513131")}
        ></Text>
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
          children={task?.name}
          {...getOverrideProps(overrides, "Name36513136")}
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
        children={task?.buttonName}
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
