/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function HamburgerMenuClosed(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="40px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HamburgerMenuClosed")}
      {...rest}
    >
      <View
        width="33.85px"
        height="20.84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 10.42px - -0.42px)"
        left="calc(50% - 16.92px - 0.08px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <View
          width="19.3px"
          height="2.94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="85.91%"
          bottom="0%"
          left="0%"
          right="42.98%"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(55,55,55,1)"
          {...getOverrideProps(overrides, "Rectangle 3")}
        ></View>
        <View
          width="33.85px"
          height="2.94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="42.95%"
          bottom="42.95%"
          left="0%"
          right="0%"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(55,55,55,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <View
          width="10.21px"
          height="2.94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="85.91%"
          left="0%"
          right="69.83%"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(55,55,55,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
      </View>
      <Button
        width="40px"
        height="40px"
        position="absolute"
        padding="0px 0px 0px 0px"
        top="calc(50% - 20px - 0px)"
        left="calc(50% - 20px - 0px)"
        size="default"
        isDisabled={false}
        variation="link"
        children="0"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
