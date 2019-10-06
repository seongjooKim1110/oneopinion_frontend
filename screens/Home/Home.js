import React from "react";
import styled from "styled-components";
import Icons from "../../components/Icon";
import { TouchableOpacity } from "react-native";
import constans from "../../constans";

const Header = styled.View`
  height: 60px;
  width: ${constans.width};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 2px;
  border-top-width: 2px;
  border-style: solid;
  border-color: black;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 30px;
`;
const Button = styled.TouchableOpacity`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
const BtnText = styled.Text`
  font-size: 16px;
`;
const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const View = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const Home = ({ navigation }) => {
  const onPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      {/* <Header>
        <TouchableOpacity onPress={onPress}>
          <Icons name="menu" size="rz" />
        </TouchableOpacity>
        <Title>의견한줌</Title>
        <Button>
          <BtnText>설문하기</BtnText>
        </Button>
      </Header> */}
      <Body>
        <Text>Home</Text>
      </Body>
    </View>
  );
};

export default Home;
