import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid black;
  margin-right: 10px;
`;

const View = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text``;

const QuestionInput = styled.TextInput`
  padding-left: 5px;
`;

function AnswerInput({ answerIndex, data, onChange }) {
  function onChangeText(e) {
    onChange(answerIndex, e);
  }

  return (
    <View>
      <Circle />
      <QuestionInput
        placeholder={"답변을 입력해주세요"}
        value={data}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default AnswerInput;
