import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, Text } from "react-native";
import Icons from "../components/Icon";
import Home from "../screens/Category/Home";
import Culture from "../screens/Category/Culture";
import Politics from "../screens/Category/Politics";
import Study from "../screens/Category/Study";
import Talent from "../screens/Category/Talent";
import Mypage from "../screens/Mypage/Mypage";
import Survey from "../screens/Survey";
import Constants from "expo-constants";
import SideMenu from "../components/SideMenu";

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
  height: 65px;
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

const MainNavigation = createDrawerNavigator(
  {
    Mypage: {
      screen: NavFactory(Mypage, "마이페이지"),
    },
    Home: {
      screen: NavFactory(Home, "전체글보기"),
    },
    Politics: {
      screen: NavFactory(Politics, "정치/경제"),
    },
    Talent: {
      screen: NavFactory(Talent, "연애"),
    },
    Study: {
      screen: NavFactory(Study, "학업/진로"),
    },
    Culture: {
      screen: NavFactory(Culture, "문화"),
    },
  },
  {
    contentComponent: props => SideMenu(props),
  },
);
export default AppContainer = createAppContainer(MainNavigation);
