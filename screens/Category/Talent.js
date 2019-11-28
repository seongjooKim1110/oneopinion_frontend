import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { View } from "react-native";

const Text = styled.Text``;

const Talent = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title={"Talent"} />
      <View style={{}}>
        <Text>Talent</Text>
      </View>
    </View>
  );
};

export default Talent;
