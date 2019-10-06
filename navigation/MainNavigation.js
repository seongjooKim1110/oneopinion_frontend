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

const Title = styled.Text`
  font-size: 30px;
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

const MainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home: {
          screen: Home,
          navigationOptions: ({ navigation }) => ({
            title: "Home screen",
            header: (
              <Header>
                <View>
                  <TouchableOpacity onPress={navigation.toggleDrawer}>
                    <Icons name="menu" size="rz" />
                  </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Title>의견한줌</Title>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Button>
                    <BtnText>설문하기</BtnText>
                  </Button>
                </View>
              </Header>
            ),
          }),
        },
      }),
    },
    Mypage,
  },
  {},
);

export default AppContainer = createAppContainer(MainNavigation);
