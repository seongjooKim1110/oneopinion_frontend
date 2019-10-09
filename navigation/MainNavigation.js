import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import constans from "../constans";
import Icons from "../components/Icon";
import Home from "../screens/Home/Home";
import Mypage from "../screens/Mypage/Mypage";
import Survey from "../screens/Survey";
import Constants from "expo-constants";

const Title = styled.Text`
  font-size: 25px;
`;
const Notch = styled.View`
  height: ${Constants.statusBarHeight}px;
  background-color: white;
`;
const WithOutNotch = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Header = styled.View`
  flex: 1;
`;
const View = styled.View`
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  width: 70px;
  height: 32px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
const BtnText = styled.Text`
  font-size: 16px;
`;

const NavFactory = (initialRoute, title, customConfig) =>
  createStackNavigator({
    initialRoute: {
      screen: initialRoute,
      navigationOptions: ({ navigation }) => ({
        title: title,
        header: (
          <Header>
            <Notch />
            <WithOutNotch>
              <View>
                <TouchableOpacity
                  style={{ paddingLeft: 10 }}
                  onPress={navigation.toggleDrawer}
                >
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
            </WithOutNotch>
          </Header>
        ),
      }),
    },
    Survey,
  });

const MainNavigation = createDrawerNavigator({
  Mypage: {
    screen: NavFactory(Mypage, "마이페이지"),
  },
  All: {
    screen: NavFactory(Home, "전체글보기"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "전체글보기",
    }),
  },
  Poli: {
    screen: NavFactory(Home, "정치/경제"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: <Title>회장</Title>,
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
});

export default AppContainer = createAppContainer(MainNavigation);
