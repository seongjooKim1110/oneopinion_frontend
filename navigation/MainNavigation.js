import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home/Home";
import Mypage from "../screens/Mypage/Mypage";

const MainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Mypage,
  },
  {},
);

export default AppContainer = createAppContainer(MainNavigation);
