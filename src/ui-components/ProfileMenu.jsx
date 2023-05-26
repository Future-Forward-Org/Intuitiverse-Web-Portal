/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ProfileMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="184px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 0px 8px rgba(0.10980392247438431, 0.10980392247438431, 0.12156862765550613, 0.1599999964237213)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileMenu")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="256px"
        height="184px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 3304")}
      >
        <Flex
          width="256px"
          height="unset"
          {...getOverrideProps(overrides, "singleSelect")}
        ></Flex>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="24px"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="43.48%"
          bottom="43.48%"
          left="69.14%"
          right="12.5%"
          borderRadius="8px"
          padding="8px 8px 8px 8px"
          backgroundColor="rgba(61,77,255,1)"
          {...getOverrideProps(overrides, "interactive")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
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
            children="New"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </View>
      <View
        width="224px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.7%"
        bottom="65.76%"
        left="6.25%"
        right="6.25%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(220,220,224,1)"
        {...getOverrideProps(overrides, "Rectangle 3853")}
      ></View>
      <View
        width="224px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="65.76%"
        bottom="33.7%"
        left="6.25%"
        right="6.25%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(220,220,224,1)"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
    </View>
  );
}
