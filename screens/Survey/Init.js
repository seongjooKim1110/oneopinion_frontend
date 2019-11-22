import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";
import CategoryItem from "../../components/CategoryItem";

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

function Init({ navigation, setInit }) {
  const subject = useInput("");
  const describe = useInput("");
  const [category, setCategory] = useState("정치/경제");
  const categorys = ["정치/경제", "연애", "학업/진로"];
  const pressCategory = text => {
    setCategory(text);
  };
  const datePopUp = () => {};
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
            <DatePicker onPress={datePopUp}></DatePicker>
          </DatePikerWrapper>
        </DateWrapper>
        <AnonyWrapper>
          <H3>익명여부</H3>
          <FlexWrapper>
            <CheckBox />
            <H5>익명</H5>
          </FlexWrapper>
        </AnonyWrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}

export default Init;
