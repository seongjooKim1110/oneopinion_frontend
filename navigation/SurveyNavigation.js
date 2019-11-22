import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Survey from "../screens/Survey/Survey";
import SurveyInit from "../screens/Survey/Init";
import { TouchableOpacity } from "react-native-gesture-handler";

const SurveyNavigation = createStackNavigator({
  SurveyInit: {
    screen: SurveyInit,
    navigationOptions: ({ navigation }) => ({
      title: "설문지 기본정보",
      headerBackTitle: "뒤로가기"
    })
  },
  Survey: {
    screen: Survey,
    navigationOptions: ({ navigation }) => ({
      title: "설문조사 만들기",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("SurveyInit")}>
          <Text>설문조사</Text>
        </TouchableOpacity>
      )
    })
  }
});

export default createAppContainer(SurveyNavigation);
