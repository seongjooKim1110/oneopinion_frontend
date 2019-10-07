import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import constans from "../constans";
import Icons from "../components/Icon";
import Home from "../screens/Home/Home";
import Mypage from "../screens/Mypage/Mypage";
import Survey from "../screens/Survey";

const Title = styled.Text`
  font-size: 25px;
`;

const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const View = styled.View`
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  width: 70px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
const BtnText = styled.Text`
  font-size: 16px;
`;

const toSurvey = ({ navigation }) => {
  console.log(navigation);
};

const NavFactory = (initialRoute, title, customConfig) =>
  createStackNavigator({
    initialRoute: {
      screen: initialRoute,
      navigationOptions: ({ navigation }) => ({
        title: title,
        header: (
          <Header>
            <View>
              <TouchableOpacity onPress={navigation.toggleDrawer}>
                <Icons name="menu" size="rz" />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Title>{title}</Title>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Button>
                <BtnText
                  onPress={function() {
                    navigation.navigate("Survey");
                  }}
                >
                  설문하기
                </BtnText>
              </Button>
            </View>
          </Header>
        ),
      }),
    },
    Survey,
  });

const MainNavigation = createDrawerNavigator({
  All: {
    screen: NavFactory(Home, "전체글보기"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "전체글보기",
    }),
  },
  Poli: {
    screen: NavFactory(Home, "정치/경제"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "정치/경제",
    }),
  },
  Telent: {
    screen: NavFactory(Home, "연애"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "연애",
    }),
  },
  Study: {
    screen: NavFactory(Home, "학업/진로"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "학업/진로",
    }),
  },
  Mypage: {
    screen: NavFactory(Mypage, "마이페이지"),
  },
});

export default AppContainer = createAppContainer(MainNavigation);
