import React from "react";
import styled from "styled-components";
import constans from "../constans";

const Wrapper = styled.View``;
const Touch = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  width: ${constans.width};
  height: ${constans.height};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.Modal``;

const Text = styled.Text``;
const ModalComponent = ({ onPress }) => {
  return (
    <Touch onPress={onPress}>
      <Wrapper>
        <Text>Hello Modal</Text>
      </Wrapper>
    </Touch>
  );
};

export default ModalComponent;
