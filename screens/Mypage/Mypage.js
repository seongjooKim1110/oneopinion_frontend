import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const Mypage = ({ navigation }) => {
  const onPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>MyPage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mypage;
