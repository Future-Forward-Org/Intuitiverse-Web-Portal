/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function TaskCard1(props) {
  const { tasks, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: tasks?.url,
  });
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
      {...getOverrideProps(overrides, "TaskCard1")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="info"
          children={tasks?.progressLabel}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
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
            children="Qualtrics Survey"
            {...getOverrideProps(overrides, "Name36513131")}
          ></Text>
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
            children={tasks?.name}
            {...getOverrideProps(overrides, "Name36513136")}
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
          children="Continue"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
