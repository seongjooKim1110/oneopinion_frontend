import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import styled from "styled-components";
import AnswerInput from "../../AnswerInput";

const TitleInput = styled.TextInput`
  border-bottom-width: 0.5px;
  border-color: #797171;
  border-style: solid;
`;
const Text = styled.Text``;
const View = styled.View`
  margin-top: 10px;
`;
const SqureBox = styled.View`
  border: 1px solid;
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
const AnsView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid black;
  margin-right: 10px;
`;

const RequireText = styled.Text``;
const IsRequire = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin-top: 10;
`;

const DeleteBox = styled.View`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

const RedText = styled.Text`
  color: red;
  font-weight: 500;
`;

function OneChoice({ index, writeSurvey, data }) {
  // const [answerSet, setAnswerSet] = useState(data.answer);
  // const [isRequire, setIsRequire] = useState(data.isRequire);
  const [dataSet, setDataSet] = useState(data[index]);
  const [isModify, setIsModify] = useState(true);

  function setRequire() {
    dataSet.isRequire = !dataSet.isRequire;
    setDataSet({ ...dataSet });
  }

  function deleteData() {
    writeSurvey(index, dataSet, "DELETE");
  }

  function deleteQuest() {
    Alert.alert("질문 지우기", "정말 지우시겠습니까?", [
      { text: "지우기", onPress: () => deleteData() },
      { text: "취소" }
    ]);
  }

  function onChangeAnswer(index, e) {
    dataSet.answer[index] = e;
    setDataSet({ ...dataSet });
  }

  function onChangeTitlt(e) {
    dataSet.title = e;
    setDataSet({ ...dataSet });
  }

  function addAnswer() {
    dataSet.answer.push("");
    setDataSet({ ...dataSet });
  }

  useEffect(() => {
    writeSurvey(index, dataSet, "WRITE");
    dataSet.answer = dataSet.answer.slice();
    console.log("change data set, and data answer set");
  }, [dataSet]);

  useEffect(() => {
    setDataSet(data[index]);
  }, [data]);
  return (
    <View>
      <IsRequire onPress={setRequire}>
        <SqureBox
          style={{ backgroundColor: dataSet.isRequire ? "black" : "white" }}
        />
        <RequireText>필수</RequireText>
      </IsRequire>
      <TitleInput
        placeholder={"질문을 입력해주세요"}
        value={dataSet.title}
        onChangeText={onChangeTitlt}
      />
      {dataSet.answer.map((el, answerIndex) => {
        console.log("el is ", el);
        return (
          <AnsView key={answerIndex}>
            <Circle />
            <AnswerInput
              answerIndex={answerIndex}
              value={el}
              onChange={onChangeAnswer}
            />
          </AnsView>
        );
      })}
      <TouchableOpacity onPress={addAnswer}>
        <Text>+ 답변 추가하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteQuest}>
        <DeleteBox>
          <RedText>질문 삭제하기</RedText>
        </DeleteBox>
      </TouchableOpacity>
    </View>
  );
}

export default OneChoice;
