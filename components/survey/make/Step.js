import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import ModalSelector from "react-native-modal-selector";
import styled from "styled-components";
import AnswerInput from "../../AnswerInput";
import { ENDDATA } from "../../../DATA";

const TitleInput = styled.TextInput`
  border-bottom-width: 0.5px;
  border-color: #797171;
  border-style: solid;
`;
const Text = styled.Text`
  margin-right: 5px;
`;
const StepText = styled.Text`
  width: 20px;
  color: #797171;
`;
const View = styled.View`
  margin-top: 10px;
`;
const FlexView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
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
const StartView = styled.View`
  width: 30px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

const RequireText = styled.Text``;
const IsRequire = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`;

const TouchableOpacity = styled.TouchableOpacity`
  width: 100px;
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
  const [dataSet, setDataSet] = useState(data[index]);

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

  function setEndValue(e) {
    dataSet.end = e;
    setDataSet({ ...dataSet });
  }

  useEffect(() => {
    writeSurvey(index, dataSet, "WRITE");
    dataSet.answer = dataSet.answer.slice();
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
      <FlexView>
        <StartView>
          <Text>1</Text>
        </StartView>
        <Text> ~ </Text>
        <ModalSelector
          selectStyle={{
            marginLeft: 5,
            width: 40,
            height: 40,
            borderColor: "black"
          }}
          data={ENDDATA}
          initValue={"10"}
          onChange={option => setEndValue(option.label)}
        />
      </FlexView>

      {dataSet.answer.map((el, answerIndex) => (
        <AnsView key={answerIndex}>
          {answerIndex === 0 ? (
            <StepText>1</StepText>
          ) : (
            <StepText>{dataSet.end}</StepText>
          )}
          <AnswerInput
            answerIndex={answerIndex}
            value={el}
            onChange={onChangeAnswer}
          />
        </AnsView>
      ))}

      <TouchableOpacity onPress={deleteQuest}>
        <DeleteBox>
          <RedText>질문 삭제하기</RedText>
        </DeleteBox>
      </TouchableOpacity>
    </View>
  );
}

export default OneChoice;
