import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { View } from "react-native";

const Text = styled.Text``;

const Home = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title={"Home"} />
      <View style={{}}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default Home;
