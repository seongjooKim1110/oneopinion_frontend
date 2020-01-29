import React from "react";
import { Text, Alert } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Survey from "../screens/Survey/Survey";
import SurveyController from "../screens/Survey/Controll";
import { TouchableOpacity } from "react-native-gesture-handler";

const SurveyNavigation = createStackNavigator({
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
        <TouchableOpacity
          onPress={() => navigation.navigate("SurveyController")}
        >
          <Text>설문조사</Text>
        </TouchableOpacity>
      )
    })
  },
  SurveyController: {
    screen: SurveyController,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() =>
            Alert.alert("뒤로가시겠습니까?", "작성한 내용이 삭제됩니다.", [
              { text: "YES", onPress: () => navigation.goBack() },
              { text: "NO" }
            ])
          }
        >
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      )
    })
  }
});

export default createAppContainer(SurveyNavigation);
