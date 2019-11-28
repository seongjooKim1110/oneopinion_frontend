import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styled from "styled-components";
import constans from "../../constans";
import Icon from "../../components/Icon";
import {
  GridChoice,
  MultChoice,
  OneChoice,
  ShortAnswer,
  Step
} from "../../components/AddSurvey";

const View = styled.View``;

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
  width: 150px;
  height: 30px;
  padding: 5px;
`;

const Text = styled.Text``;
function Make({ navigation }) {
  console.log(navigation.getParam("subject"));
  const [isMakeSurvey, setIsMakeSurvey] = useState(true);
  const [kindOfSurvey, setKindOfSurvey] = useState([]);
  const [dataOfSurvey] = useState([]);
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
    const newSurvey = kindOfSurvey.concat(e[0]);
    dataOfSurvey.push([]);
    setKindOfSurvey(newSurvey);
  }
  return (
    <View>
      <AddSurveyBtn>
        <AddSurveyBorder onPress={pressBtn}>
          <BtnText>{isMakeSurvey ? "취소" : "조사 추가"}</BtnText>
        </AddSurveyBorder>
      </AddSurveyBtn>
      {isMakeSurvey && (
        <View
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {data.map((el, index) => (
            <KindOfSurveyBox key={el} onPress={() => makeSurvey(el)}>
              <Icon
                name={el[0]}
                design={el[0] === "grid" ? "ion" : "ant"}
                size={el[0] === "grid" ? "sm" : "md"}
                style={{ marginRight: 5 }}
              />
              <Text style={{ fontSize: 15 }}>{el[1]}</Text>
            </KindOfSurveyBox>
          ))}
        </View>
      )}
      {dataOfSurvey.map((el, index) => {
        if (el === "check") {
          return <OneChoice />;
        }
      })}
    </View>
  );
}

export default Make;
