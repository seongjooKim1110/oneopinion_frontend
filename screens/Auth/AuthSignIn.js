import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components";
import constans from "../../constans";
import useInput from "../../components/hooks/useInput";

const SafeAreaView = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

const View = styled.View`
  align-items: center;
`;

const SubView = styled.View`
  flex-direction: row;
  padding-left: 15px;
  margin-top: 31px;
`;

const FourWordInput = styled.TextInput`
  margin-right: 5px;
  width: 65px;
  border-bottom-width: 1px;
  font-size: 18px;
  text-align: center;
`;

const TwoWordInput = styled.TextInput`
  margin-right: 5px;
  width: 35px;
  border-bottom-width: 1px;
  font-size: 18px;
  text-align: center;
`;

const MainText = styled.Text`
  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
`;

const SubText = styled.Text`
  margin-right: 20px;
  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

const District = styled.ScrollView`
  position: relative;
`;

const ServiceTerms = styled.ScrollView`
  margin: 16px;
  height: 180px;
  border: 1px solid #dfdcdc;
  padding: 15px;
`;

const Text = styled.Text``;

function AuthSignIn() {
  const year = useInput("");
  const month = useInput("");
  const day = useInput("");
  return (
    <SafeAreaView>
      <View style={{ marginTop: 10 }}>
        <MainText>추가 정보 수집</MainText>
      </View>
      <SubView>
        <SubText>생년월일</SubText>
        <FourWordInput placeholder="YYYY" {...year} />
        <SubText>년</SubText>
        <TwoWordInput placeholder="MM" {...month} />
        <SubText>월</SubText>
        <TwoWordInput placeholder="DD" {...day} />
        <SubText>일</SubText>
      </SubView>
      <SubView>
        <SubText>지역구</SubText>
      </SubView>
      <SubView>
        <SubText>성별</SubText>
      </SubView>
      <SubView>
        <SubText>직업</SubText>
      </SubView>
      <ServiceTerms>
        <Text>
          추가 제공하신 정보는 통계 목적외에는 사용되지 않으며 제공하신 정보는
          안전하게 관리됩니다. {"\n\n"}
          추가 내용은 이후 추가예정
        </Text>
      </ServiceTerms>
    </SafeAreaView>
  );
}

export default AuthSignIn;
