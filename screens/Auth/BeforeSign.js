import React from "react";
import { Button } from "react-native";
import constans from "../../constans";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
`;

const TopLayout = styled.View`
  flex: 1.4;
  justify-content: center;
  align-items: center;
  background: #c59898;
`;

const TopText = styled.Text`
  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

const BottomLayout = styled.View`
  flex: 1;
  padding-top: 20px;
  align-items: flex-end;
`;

const ButtonView = styled.View`
  background-color: #dfdcdc;
  align-items: flex-end;
  width: 55px;
  height: 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-right: 16px;
  color: black;
`;

const Image = styled.Image`
  align-self: center;
  width: ${constans.min * 0.9};
  height: ${(constans.min * 200 * 0.9) / 324};
`;

function BeforeSign({ navigation }) {
  return (
    <View>
      <TopLayout>
        <TopText>
          안녕하세요{"\n"}
          SUR-FREE에 오신것을{"\n"}
          진심으로 환영합니다!{"\n\n\n"}
          여러분께 보다 정확한 정보를 전달하기 위해{"\n"}
          추가적인 정보를 수집하고 있습니다.{"\n"}
          여러분의 정보는 안전하게 보호되고 있습니다.{"\n\n\n"}
          다음 버튼을 눌러 추가정보 기입 후{"\n"}
          회원가입을 완료해주세요!{"\n"}
        </TopText>
      </TopLayout>
      <BottomLayout>
        <Image
          source={require("../../assets/sur-free.png")}
          resizeMode="cover"
        />
        <ButtonView>
          <Button
            title="다음"
            onPress={() => navigation.navigate("AuthSignIn")}
          />
        </ButtonView>
      </BottomLayout>
    </View>
  );
}

export default BeforeSign;
