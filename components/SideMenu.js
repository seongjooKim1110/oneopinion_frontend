import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

const Wrapper = styled.View`
  flex: 1;
  background-color: #412823;
`;

const Header = styled.TouchableOpacity`
  height: 100px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 34;
  align-self: flex-end;
`;
const Point = styled.Text`
  font-size: 35px;
`;

const FlexWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Cate = styled.Text`
  color: white;
  font-size: 33px;
  text-align: center;
`;
const SubWrapper = styled.TouchableOpacity`
  padding-left: 10px;
  margin: 5px;
`;
const Sub = styled.Text`
  font-size: 20px;
  color: white;
`;

function SideMenu({ navigation }) {
  return (
    <Wrapper>
      <Header activeOpacity={1} onPress={() => navigation.navigate("Mypage")}>
        <Avatar
          source={{
            uri:
              "https://us.123rf.com/450wm/bee32/bee321509/bee32150900030/44673539-유기-토양에서-씨앗에서-자라는-녹색-새싹.jpg?ver=6"
          }}
        />
        <Point>300P</Point>
      </Header>
      <FlexWrapper>
        <Entypo name="dot-single" size={50} color="white" />
        <Cate> 카테고리 </Cate>
      </FlexWrapper>
      <SubWrapper
        onPress={() => {
          navigation.navigate("Home");
          navigation.toggleDrawer();
        }}
      >
        <Sub>- 전체글 보기</Sub>
      </SubWrapper>
      <SubWrapper
        onPress={() => {
          navigation.navigate("Culture");
          navigation.toggleDrawer();
        }}
      >
        <Sub>- 문화</Sub>
      </SubWrapper>
      <SubWrapper
        onPress={() => {
          navigation.navigate("Politics");
          navigation.toggleDrawer();
        }}
      >
        <Sub>- 정치/경제</Sub>
      </SubWrapper>
      <SubWrapper
        onPress={() => {
          navigation.navigate("Talent");
          navigation.toggleDrawer();
        }}
      >
        <Sub>- 연예</Sub>
      </SubWrapper>
      <SubWrapper
        onPress={() => {
          navigation.navigate("Study");
          navigation.toggleDrawer();
        }}
      >
        <Sub>- 학업/진로</Sub>
      </SubWrapper>
    </Wrapper>
  );
}

export default SideMenu;
