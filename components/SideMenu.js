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
              "https://us.123rf.com/450wm/bee32/bee321509/bee32150900030/44673539-유기-토양에서-씨앗에서-자라는-녹색-새싹.jpg?ver=6",
          }}
        />
        <Point>300P</Point>
      </Header>
      <FlexWrapper>
        <Entypo name="dot-single" size={50} color="white" />
        <Cate> 카테고리 </Cate>
      </FlexWrapper>
      <SubWrapper onPress={() => navigation.navigate("Home")}>
        <Sub>- 전체글 보기</Sub>
      </SubWrapper>
      <SubWrapper onPress={() => navigation.navigate("Culture")}>
        <Sub>- 문화</Sub>
      </SubWrapper>
      <SubWrapper onPress={() => navigation.navigate("Politics")}>
        <Sub>- 정치/경제</Sub>
      </SubWrapper>
      <SubWrapper onPress={() => navigation.navigate("Talent")}>
        <Sub>- 연예</Sub>
      </SubWrapper>
      <SubWrapper onPress={() => navigation.navigate("Study")}>
        <Sub>- 학업/진로</Sub>
      </SubWrapper>

      {/* Mypage: {
      screen: NavFactory(Mypage, "마이페이지"),
    },
    All: {
      screen: NavFactory(Home, "전체글보기"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "전체글보기",
      }),
    },
    Poli: {
      screen: NavFactory(Home, "정치/경제"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: <Title>회장</Title>,
      }),
    },
    Telent: {
      screen: NavFactory(Home, "연애"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "연애",
      }),
    },
    Study: {
      screen: NavFactory(Home, "학업/진로"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "학업/진로",
      }),
    }, */}
    </Wrapper>
  );
}

export default SideMenu;
