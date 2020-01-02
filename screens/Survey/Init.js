import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";
import CategoryItem from "../../components/CategoryItem";
import Calendar from "../../components/Calendar";

const Notch = styled.View`
  height: ${Constants.statusBarHeight}px;
  background-color: white;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 0px ${constans.width * 0.05}px;
`;

const HeaderWrapper = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

const Header = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;

const TitleWrapper = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const TextInput = styled.TextInput`
  padding-left:5px; 
  border-bottom-width:1px;
  border-color:gray;
  width:${constans.width * 0.9}
  font-weight:600;
  margin-bottom:10px;
`;

const CategorysWrapper = styled.View`
  margin-bottom: 10px;
`;
const DateWrapper = styled.View``;

const DatePikerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const DatePicker = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: gray;
  min-width: 100px;
`;

const AnonyWrapper = styled.View``;

const FlexWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 50px;
`;
const H3 = styled.Text`
  font-size: 20px;
`;
const H5 = styled.Text`
  font-size: 14px;
  margin: 5px 0px;
`;

const CheckBox = styled.View`
  margin: 7px 5px 7px 0px;
  width: 10px;
  height: 10px;
  border: 1px solid black;
`;
const MakeSurvey = styled.View`
  display: flex;
  align-items: flex-end;
`;
const TouchMake = styled.TouchableOpacity`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

function Init({ toMake, initData }) {
  const subject = useInput(null);
  const describe = useInput(null);
  const [pop, setPop] = useState(false);
  const [category, setCategory] = useState("정치/경제");
  const [isAnony, setIsAnony] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const [endDate, setEndDate] = useState([year, month, day]);
  const categorys = ["정치/경제", "연애", "학업/진로"];

  const visualEndDate = `${endDate[0]}-${
    endDate[1] === 12 ? "01" : endDate[1] + 1
  }-${endDate[2]}`;
  const pressCategory = text => {
    setCategory(text);
  };

  function setEndDateValue(date) {
    setEndDate([date[0], date[1], date[2]]);
    setPop(false);
  }
  function datePopUp() {
    setPop(true);
  }

  function pressNext() {
    initData.subject = subject.value;
    initData.describe = describe.value;
    initData.category = category;
    initData.endDate = endDate;
    initData.isAnony = isAnony;
    toMake({
      subject: subject.value,
      describe: describe.value,
      category,
      endDate,
      isAnony
    });
  }

  useEffect(() => {
    if (subject.value !== null && describe.value !== null) {
      setIsFinish(true);
    }
  }, [subject, describe]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Wrapper>
        <Notch />
        <HeaderWrapper>
          <Header>설문지 기본정보</Header>
        </HeaderWrapper>
        <TitleWrapper>
          <TextInput placeholder="이곳을 눌러 제목을 입력하세요" {...subject} />
          <TextInput
            style={{ fontWeight: "300" }}
            multiline={true}
            placeholder="설문지 설명"
            {...describe}
          />
        </TitleWrapper>
        <CategorysWrapper>
          <H3>카테고리</H3>
          {categorys.map(el => (
            <CategoryItem
              key={el}
              text={el}
              select={category}
              setCategory={pressCategory}
            />
          ))}
        </CategorysWrapper>
        <DateWrapper>
          <H3>게시기간</H3>
          <DatePikerWrapper>
            <H3>{new Date().toISOString().slice(0, 10)}</H3>
            <H3>~</H3>
            <DatePicker onPress={datePopUp}>
              <H3>{visualEndDate}</H3>
            </DatePicker>
          </DatePikerWrapper>
        </DateWrapper>
        <AnonyWrapper>
          <H3>익명여부</H3>
          <FlexWrapper
            onPress={() => {
              setIsAnony(!isAnony);
            }}
          >
            <CheckBox
              style={{ backgroundColor: isAnony ? "black" : "white" }}
            />
            <H5>익명</H5>
          </FlexWrapper>
        </AnonyWrapper>
        {isFinish && (
          <MakeSurvey>
            <TouchMake onPress={pressNext}>
              <H3>다음</H3>
            </TouchMake>
          </MakeSurvey>
        )}
        {pop && (
          <Calendar endDate={endDate} setEndDateValue={setEndDateValue} />
        )}
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}

export default Init;
