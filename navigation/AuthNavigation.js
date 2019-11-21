import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AuthHome from "../screens/Auth/AuthHome";
import SignIn from "../screens/Auth/AuthSignIn";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    SignIn
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);
