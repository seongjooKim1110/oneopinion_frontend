import React, { useState } from "react";
import { Platform, StatusBar, Keyboard } from "react-native";
import styled from "styled-components";
import ModalSelector from "react-native-modal-selector";
import axios from "axios";
import useInput from "../../components/hooks/useInput";
import { cityData, streetData } from "../../DATA";
import Icon from "../../components/Icon";

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
  align-items: center;
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
  font-size: 21px;
  line-height: 23px;
`;

const ServiceTerms = styled.ScrollView`
  margin: 16px;
  height: 180px;
  border: 1px solid #dfdcdc;
  padding: 15px;
`;

const JobInput = styled.TextInput`
  margin-right: 5px;
  width: 130px;
  border-bottom-width: 1px;
  font-size: 18px;
  text-align: center;
`;

const Agree = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
  margin-right: 22px;
  margin-bottom: 10px;
`;

const CheckBox = styled.View`
  width: 17px;
  height: 17px;
  margin-left: 7px;
  border: 1px solid #dfdcdc;
`;

const SendData = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  margin-right: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Text = styled.Text``;

function AuthSignIn() {
  const year = useInput("");
  const month = useInput("");
  const day = useInput("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [sex, setSex] = useState("");
  const job = useInput("");
  const [agree, setAgree] = useState(false);

  async function sendData() {
    if (year.value === "" || month.value === "" || day.value === "") {
      alert("생년,월,일 을 작성해주세요");
    } else if (city === "" || street === "") {
      alert("지역,구 를 입력해주세요");
    } else if (sex === "") {
      alert("성별을 입력해주세요");
    } else if (job.value === "") {
      alert("직업을 입력해주세요");
    } else if (agree === false) {
      alert("약관에 동의해주세요");
    } else {
      try {
      } catch (e) {
        console.log(e);
      }
      console.log(
        year.value,
        month.value,
        day.value,
        cityData[city].label,
        streetData[city - 1][street].label,
        sex,
        job.value,
        agree
      );
    }
  }

  return (
    <SafeAreaView>
      <View style={{ marginTop: 10 }}>
        <MainText>추가 정보 수집</MainText>
      </View>
      <SubView>
        <SubText>생년월일</SubText>
        <FourWordInput placeholder="YYYY" keyboardType="phone-pad" {...year} />
        <SubText>년</SubText>
        <TwoWordInput placeholder="MM" keyboardType="phone-pad" {...month} />
        <SubText>월</SubText>
        <TwoWordInput placeholder="DD" keyboardType="phone-pad" {...day} />
        <SubText>일</SubText>
      </SubView>
      <SubView>
        <SubText>지역구</SubText>
        <ModalSelector
          data={cityData}
          initValue="시/도"
          onChange={option => setCity(option.key)}
          style={{ marginRight: 10 }}
        />
        {city !== "" && (
          <ModalSelector
            data={streetData[city - 1]}
            initValue="구"
            onChange={option => setStreet(option.key)}
          />
        )}
      </SubView>
      <SubView>
        <SubText>성별</SubText>
        <ModalSelector
          data={[
            { key: 0, section: true, label: "성별" },
            { key: 1, label: "남" },
            { key: 2, label: "여" }
          ]}
          initValue="성별"
          onChange={option => setSex(option.key)}
        />
      </SubView>
      <SubView>
        <SubText>직업</SubText>
        <JobInput {...job}></JobInput>
      </SubView>
      <ServiceTerms>
        <Text>
          추가 제공하신 정보는 통계 목적외에는 사용되지 않으며 제공하신 정보는
          안전하게 관리됩니다. {"\n\n"}
          추가 내용은 이후 추가예정
        </Text>
      </ServiceTerms>
      <Agree
        onPress={() => setAgree(!agree)}
        style={{ marginRight: agree ? 0 : 15 }}
      >
        <Text>추가 정보 수집에 동의합니다</Text>
        <CheckBox />
        {agree && (
          <Icon
            design="ant"
            name="check"
            size={18}
            style={{ position: "relative", left: -15 }}
          />
        )}
      </Agree>
      <SendData
        style={{ backgroundColor: agree ? "blue" : "#dfdcdc" }}
        onPress={() => {
          sendData();
        }}
      >
        <Text>회원가입</Text>
      </SendData>
    </SafeAreaView>
  );
}

export default AuthSignIn;
