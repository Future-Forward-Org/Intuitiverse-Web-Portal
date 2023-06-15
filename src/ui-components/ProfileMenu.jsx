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
        left="0.39%"
        right="-0.39%"
        {...getOverrideProps(overrides, "Group 3304")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="256px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "singleSelect")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 0px 8px rgba(0.10980392247438431, 0.10980392247438431, 0.12156862765550613, 0.1599999964237213)"
            borderRadius="8px"
            padding="8px 0px 8px 0px"
            backgroundColor="rgba(242,243,245,1)"
            {...getOverrideProps(overrides, "menu")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="16px 48px 16px 16px"
              {...getOverrideProps(overrides, "menuOption1")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(9,13,51,1)"
                lineHeight="24px"
                textAlign="left"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Profile"
                {...getOverrideProps(overrides, "inputText3515042")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="16px 48px 16px 16px"
              {...getOverrideProps(overrides, "menuOption2")}
            >
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
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Accomplishments"
                {...getOverrideProps(overrides, "inputText3515046")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="16px 48px 16px 16px"
              {...getOverrideProps(overrides, "menuOption3")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(32,33,36,1)"
                lineHeight="24px"
                textAlign="left"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Logout"
                {...getOverrideProps(overrides, "inputText3515044")}
              ></Text>
            </Flex>
          </Flex>
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
