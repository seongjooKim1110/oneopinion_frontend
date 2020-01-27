import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styled from "styled-components";
import constans from "../../constans";
import Icon from "../../components/Icon";
import {
  GridChoice,
  MultyChoice,
  OneChoice,
  ShortAnswer,
  Step
} from "../../components/AddSurvey";

const View = styled.View`
  flex: 1;
`;

const CheckBoxView = styled.View``;

const TouchableOpacity = styled.TouchableOpacity``;

const AddSurveyBtn = styled.View`
  justify-content: center;
  align-items: center;
`;

const AddSurveyBorder = styled.TouchableOpacity`
  width: 99px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BtnText = styled.Text`
  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

const KindOfSurveyBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  width: 170px;
  height: 30px;
  padding: 0px;
`;

const PositingBtnView = styled.View`
  width: 55px;
  height: 29px;
  background: #dfdcdc;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 30px;
`;

const Text = styled.Text``;

function Make({ DATA, navigation }) {
  const [isMakeSurvey, setIsMakeSurvey] = useState(true);
  const [surveyData, setSurveyData] = useState(DATA);
  const data = [
    ["check", "객관식"],
    ["checksquareo", "객관식(복수체크)"],
    ["checkcircleo", "직선형(단계)"],
    ["grid", "객관식 그리드"],
    ["bars", "주관식"]
  ];
  function pressBtn() {
    setIsMakeSurvey(!isMakeSurvey);
  }
  function makeSurvey(e) {
    const survey = {};
    survey.class = e[0];
    survey.title = "";
    survey.answer = [""];
    if (e[0] === "check" || e[0] === "checksquareo") {
      survey.answer = ["", ""];
    }
    survey.isRequire = false;
    surveyData.push(survey);
    setSurveyData(surveyData.slice());
  }

  function writeSurvey(index, value, action) {
    if (action === "WRITE") {
      surveyData[index] = value;
    } else if (action === "DELETE") {
      surveyData.splice(index, 1);
    }
    setSurveyData(surveyData.slice());
  }

  useEffect(() => {
    navigation.setParams({ data: surveyData });
  }, [surveyData]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddSurveyBtn>
        <AddSurveyBorder onPress={pressBtn}>
          <BtnText>{isMakeSurvey ? "취소" : "조사 추가"}</BtnText>
        </AddSurveyBorder>
      </AddSurveyBtn>
      {isMakeSurvey && (
        <CheckBoxView
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {data.map(el => (
            <KindOfSurveyBox key={el} onPress={() => makeSurvey(el)}>
              <Icon
                name={el[0]}
                design={el[0] === "grid" ? "ion" : "ant"}
                size="sm"
                style={{ marginRight: 5 }}
              />
              <Text style={{ fontSize: 15 }}>{el[1]}</Text>
            </KindOfSurveyBox>
          ))}
        </CheckBoxView>
      )}
      <FlatList
        data={surveyData}
        keyExtractor={(item, index) => `${item.class || "SUBJECT"} ${index}`}
        style={{ paddingLeft: 10, marginBottom: 10, flex: 1 }}
        extraData={surveyData.length}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return <Text>{item.class || "제목 : " + item.subject}</Text>;
          } else {
            if (item.class === "check") {
              return (
                <OneChoice
                  index={index}
                  data={surveyData}
                  writeSurvey={writeSurvey}
                />
              );
            } else if (item.class === "checksquareo") {
              return (
                <MultyChoice
                  index={index}
                  data={surveyData}
                  writeSurvey={writeSurvey}
                />
              );
            } else if (item.class === "checkcircleo") {
              return (
                <Step
                  index={index}
                  data={surveyData}
                  writeSurvey={writeSurvey}
                />
              );
            }
          }
        }}
      />
    </SafeAreaView>
  );
}

export default Make;
