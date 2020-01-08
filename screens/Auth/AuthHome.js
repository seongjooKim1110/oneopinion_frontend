import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthButton from "../../components/AuthButton";
import { useLogIn } from "../../AuthContext";

import * as Google from "expo-google-app-auth";

//firebase moduel
import * as firebase from "firebase";
import "firebase/firestore";
// Initialize Firebase
import { firebaseConfig } from "../../config";
firebase.initializeApp(firebaseConfig);

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

const onSignIn = async googleUser => {
  let isUserEqual = false;
  console.log("Google Auth Response");
  try {
    isUserEqual = await axios.post(
      "https://hidden-stream-28896.herokuapp.com/login",
      googleUser
    );
    console.log("is user equal", isUserEqual);
  } catch (error) {
    console.log("has error", error);
    return false;
  }

  // Check if we are already signed-in Firebase with the correct user.
  if (!isUserEqual) {
    // Build Firebase credential with the Google ID token.
    var credential = firebase.auth.GoogleAuthProvider.credential(
      googleUser.idToken,
      googleUser.accessToken
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then(function() {
        console.log("user signed in ");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
      });
  } else {
    console.log("User already signed-in Firebase.");
  }
};

function AuthHome({ navigation }) {
  const [logInTool, setLogInTool] = useState(null);
  const logIn = useLogIn();
  const pressNaver = () => {
    logIn("1234");
  };
  const pressGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "386017314845-24dah7plh63vhalgk93h3o3p5vrssnb3.apps.googleusercontent.com",
        androidClientId: "1:386017314845:android:bea0e4c5df2dfead135ef4",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const onSignInResult = onSignIn(result);
        console.log(onSignInResult);
        navigation.navigate("SignIn");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  const pressFacebook = () => {};
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
