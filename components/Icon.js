import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";

const Icons = ({ name, size = "md", color = "black", focused = false }) => {
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
  if (size === "sm") {
    iconSize = 24;
  } else if (size === "md") {
    iconSize = 32;
  } else {
    iconSize = 40;
  }
  return <Ionicons name={`${os}-${name}`} size={iconSize} color={color} />;
};

export default Icons;
