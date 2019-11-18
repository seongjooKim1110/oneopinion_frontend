import React from "react";
import styled from "styled-components";
import Icons from "../../components/Icon";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";

const Title = styled.Text`
  font-size: 25px;
`;
const Notch = styled.View`
  height: ${Constants.statusBarHeight}px;
  background-color: white;
`;
const WithOutNotch = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Wrapper = styled.View`
  height: 65px;
  background-color: #c59898;
`;
const View = styled.View``;

function Header({ navigation, title }) {
  return (
    <Wrapper>
      <Notch />
      <WithOutNotch>
        <View>
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            onPress={navigation.toggleDrawer}
          >
            <Icons name="menu" size="rz" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Title>{title}</Title>
        </View>
      </WithOutNotch>
    </Wrapper>
  );
}

export default Header;
