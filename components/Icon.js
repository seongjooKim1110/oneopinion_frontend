import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";

const Icons = ({
  name,
  size = "md",
  color = "black",
  focused = false,
  design = "ion",
  style
}) => {
  if (focused) {
    color = "white";
  }
  let os = "";
  let iconSize = 0;
  if (Platform.OS === "ios") {
    os = "ios";
  } else if (Platform.OS === "android") {
    os = "md";
  }
  if (typeof size === "number") {
    iconSize = size;
  } else if (size === "sm") {
    iconSize = 24;
  } else if (size === "md") {
    iconSize = 32;
  } else {
    iconSize = 40;
  }
  if (design === "ion") {
    return (
      <Ionicons
        name={`${os}-${name}`}
        size={iconSize}
        color={color}
        style={style}
      />
    );
  } else if (design === "ant") {
    return <AntDesign name={name} style={style} size={iconSize} />;
  }
};

export default Icons;
