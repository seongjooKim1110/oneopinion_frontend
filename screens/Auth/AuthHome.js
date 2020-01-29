import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthButton from "../../components/AuthButton";
import { useLogIn } from "../../AuthContext";
import * as Google from "expo-google-app-auth";
//firebase moduel
import firebase from "../../firebase";

const db = firebase.firestore();

const Wrapper = styled.View`
  flex: 1;
  background-color: rgba(87, 66, 46, 0.5);
`;
const TextWrapper = styled.View`
  flex: 1.7;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
`;
const ButtonWrapper = styled.View`
  flex: 2;
  align-items: center;
`;

const LogInText = styled.Text`
  font-size: 40px;
  font-weight: 700;
`;

const onSignIn = async (googleUser, URL) => {
  // let isUserEqual = false;
  // console.log(googleUser);
  // try {
  //   const result = await db
  //     .collection("users")
  //     .doc(googleUser.user.email)
  //     .get();
  //   if(result.exists) {

  //   } else {

  //   }
  // } catch (error) {
  //   console.log("has error", error);
  //   return false;
  // }
  const credential = await firebase.auth.GoogleAuthProvider.credential(
    googleUser.idToken,
    googleUser.accessToken
  );
  try {
    const {
      user: { uid }
    } = await firebase.auth().signInWithCredential(credential);
    const { exists, data } = await db
      .collection("users")
      .doc(uid)
      .get();
    return { exists, uid };
  } catch (error) {
    console.log(error);
  }
};

function AuthHome({ navigation }) {
  const [logInTool, setLogInTool] = useState(null);
  const logIn = useLogIn();
  const pressNaver = async () => {};
  const pressGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "386017314845-24dah7plh63vhalgk93h3o3p5vrssnb3.apps.googleusercontent.com",
        androidClientId:
          "386017314845-v2tkp0rcjgg70tvuqrj2lor2cu5305p0.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const { exists, uid } = await onSignIn(result);
        console.log(exists, uid);
        if (exists) {
          logIn(uid);
        } else {
          navigation.navigate("BeforeSign", { uid });
        }

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  const pressFacebook = () => {
    navigation.navigate("BeforeSign");
  };
  return (
    <Wrapper>
      <TextWrapper>
        <LogInText>로그인</LogInText>
      </TextWrapper>
      <ButtonWrapper>
        <AuthButton text="네이버" bgColor="#08CF5D" onPress={pressNaver} />
        <AuthButton
          text="구글"
          bgColor="white"
          color="black"
          onPress={pressGoogle}
        />
        <AuthButton text="페이스북" bgColor="#4167B2" onPress={pressFacebook} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default AuthHome;
