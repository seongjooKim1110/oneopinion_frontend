import React from "react";
import styled from "styled-components";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.View`
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  width: ${constans.width / 2};
  border-color: gray;
  border-bottom-width: 1;
`;

const Text = styled.Text``;

function AuthSignIn() {
  const nickName = useInput("");
  return (
    <View>
      <InputWrapper>
        <Text>닉네임 : </Text>
        <TextInput placeholder="닉네임을 입력해주세요" {...nickName} />
      </InputWrapper>
      <InputWrapper>
        <Text>닉네임 : </Text>
        <TextInput />
      </InputWrapper>
      <InputWrapper>
        <Text>닉네임 : </Text>
        <TextInput />
      </InputWrapper>
      <InputWrapper>
        <Text>닉네임 : </Text>
        <TextInput />
      </InputWrapper>
    </View>
  );
}

export default AuthSignIn;
