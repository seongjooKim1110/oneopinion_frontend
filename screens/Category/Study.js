import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { View } from "react-native";

const Text = styled.Text``;

const Study = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title={"Study"} />
      <View style={{}}>
        <Text>Study</Text>
      </View>
    </View>
  );
};

export default Study;
