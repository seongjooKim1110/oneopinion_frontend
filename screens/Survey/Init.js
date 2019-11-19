import React, { useState } from "react";
import { TouchableOpacity, CheckBox, Button } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";
import DatePicker from "../../components/DatePicker";
import CategoryItem from "../../components/CategoryItem";

const Notch = styled.View`
  height: ${Constants.statusBarHeight}px;
  background-color: white;
`;

const Wrapper = styled.View``;

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
  height: 40;
  font-weight:600;
`;

const CategorysWrapper = styled.View`
  margin-left: ${constans.width * 0.05};
  margin-bottom: 10px;
`;
const DateWrapper = styled.View`
  margin-left: ${constans.width * 0.05};
`;

const DatePikerWrapper = styled.View`
  display: flex;
`;

const AnonyWrapper = styled.View``;

const FlexWrapper = styled.View`
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

function Init({ navigation, setInit }) {
  const subject = useInput("");
  const describe = useInput("");
  const [category, setCategory] = useState("정치/경제");
  const categorys = ["정치/경제", "연애", "학업/진로"];
  const pressCategory = text => {
    setCategory(text);
  };
  return (
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
        <DatePikerWrapper></DatePikerWrapper>
      </DateWrapper>
      <AnonyWrapper>
        <H3>익명여부</H3>
        <FlexWrapper>
          <H5>익명</H5>
        </FlexWrapper>
      </AnonyWrapper>
    </Wrapper>
  );
}

export default Init;
