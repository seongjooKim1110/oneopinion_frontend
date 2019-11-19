import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthButton from "../../components/AuthButton";
import { useLogIn } from "../../AuthContext";

import * as Google from "expo-google-app-auth";

//firebase moduel
import * as firebase from "firebase";
import 'firebase/firestore'
// Initialize Firebase
import { firebaseConfig } from "../../config";
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let docRef = db.collection('users').doc('sj');




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
<<<<<<< HEAD
const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        console.log("user already signed in "); 
        return true;
      }
=======

const onSignIn = async googleUser => {
  let isUserEqual;
  console.log("Google Auth Response");
  try {
    isUserEqual = await axios.post(
      "https://hidden-stream-28896.herokuapp.com/login",
      googleUser
    );
  } catch (error) {
    console.log(error);
    return false;
  }
  if (!isUserEqual.data.token) {
    try {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );
      await firebase.auth().signInWithCredential(credential);
      return true;
    } catch (error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      return false;
>>>>>>> 3dc404b1c5d84c5a636c42d7e9a5eef00636abc9
    }
  
  }
  return false;
<<<<<<< HEAD
}

const onSignIn = googleUser => {
  console.log('Google Auth Response', googleUser);
  
  
  var firebaseUser = firebase.auth().currentUser;


    if (!isUserEqual(googleUser, firebaseUser)) {
      
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
          );
    

      firebase.auth().signInWithCredential(credential)
      .then(function(){
        console.log('user signed in');
        var user = firebase.auth().currentUser;
        let setTest = docRef.set({
          'name': user.displayName, 
          'email': user.email 
        });
      })
      .catch(function(error) {
       
        var errorCode = error.code;
        var errorMessage = error.message;
        
        var email = error.email;
   
        var credential = error.credential;
  
      });
    } else {
      console.log('User already signed-in Firebase.');
    }

}

=======
};
>>>>>>> 3dc404b1c5d84c5a636c42d7e9a5eef00636abc9

function AuthHome({ navigation }) {
  const [logInTool, setLogInTool] = useState(null);
  const logIn = useLogIn();
  const pressNaver = () => {
    logIn("1234");
  };
  const pressGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "442810321009-hb8j0tud7862iu70rr6eh5f5v5jpsae8.apps.googleusercontent.com",
        //    iosClientId:"YOUR_iOS_CLIENT_ID",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const onSignInResult = await onSignIn(result);
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
