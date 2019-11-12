import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { View } from "react-native";

const Text = styled.Text``;

const Culture = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title={"Culture"} />
      <View style={{}}>
        <Text>Culture</Text>
      </View>
    </View>
  );
};

export default Culture;
