import React, { useState } from "react";
import { Modal, TouchableOpacity, CheckBox } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";
import DatePicker from "../../components/DatePicker";

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

const Picker = styled.Picker`
  width: ${constans.width};
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
  const [modal, setModal] = useState(false);
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
        <TouchableOpacity>
          <H5>-{category}-</H5>
        </TouchableOpacity>
        <Modal visible={modal}>
          <Picker
            selectedValue={category}
            style={{ width: 200, height: 100 }}
            onValueChange={itemValue => setCategory(itemValue)}
          >
            <Picker.Item label="정치/경제" value="정치/경제" />
            <Picker.Item label="연애" value="연애" />
            <Picker.Item label="학업/진로" value="학업/진로" />
          </Picker>
        </Modal>
      </CategorysWrapper>
      <DateWrapper>
        <H3>게시기간</H3>
        <DatePikerWrapper>
          <DatePicker />
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
  );
}

export default Init;
