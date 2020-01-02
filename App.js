import React, { useEffect, useState } from "react";
import { AsyncStorage, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import styles from "./styles";
import NavController from "./components/NavController";
import { AuthProvider } from "./AuthContext";

//firebase moduel
import * as firebase from "firebase";

// Initialize Firebase
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        Roboto: require("./assets/Roboto/Roboto-Regular.ttf")
      });
      AsyncStorage.clear();
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn === null || isLoggedIn === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return loaded ? (
    <ThemeProvider theme={styles}>
      <AuthProvider isLoggedIn={isLoggedIn}>
        <NavController />
      </AuthProvider>
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
}
