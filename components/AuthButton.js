import React from "react";
import styled from "styled-components";
import constans from "../constans";

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${constans.width / 2}px;
  border: 1px solid black;
  height: 40;
  border-radius: 4px;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  font-weight: 400;
  font-size: 20;
`;

export default ({ text, bgColor, color = "white", onPress }) => {
  return (
    <Button style={{ backgroundColor: bgColor }} onPress={onPress}>
      <Text style={{ color }}>{text}</Text>
    </Button>
  );
};
