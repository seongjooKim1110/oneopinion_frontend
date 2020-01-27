import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const Text = styled.Text``;

const QuestionInput = styled.TextInput`
  padding-left: 5px;
`;

function AnswerInput({ answerIndex, value, onChange }) {
  function onChangeText(e) {
    onChange(answerIndex, e);
  }
  return (
    <QuestionInput
      placeholder={"답변을 입력해주세요"}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default AnswerInput;
