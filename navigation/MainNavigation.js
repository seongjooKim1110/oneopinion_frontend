import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DrawerNavigation from "./DrawerNavigation";
import SurveyNavigation from "./SurveyNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";

const TestMain = createStackNavigator(
  {
    DrawerNavigation,
    SurveyNavigation: {
      screen: SurveyNavigation
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(TestMain);
