import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { View } from "react-native";

const Text = styled.Text``;

const Politics = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title={"Politics"} />
      <View style={{}}>
        <Text>Politics</Text>
      </View>
    </View>
  );
};

export default Politics;
