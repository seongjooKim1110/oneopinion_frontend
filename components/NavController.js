import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthHome from "../screens/Auth/AuthHome";
import MainNavigation from "../navigation/MainNavigation";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  console.log(isLoggedIn);
  return isLoggedIn ? <MainNavigation /> : <AuthHome />;
};

export default NavController;
