import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import constans from "../../constans";
import Modal from "../../components/Modal";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderView = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
`;
const AvatarView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const Avatar = styled.Image`
  width: ${constans.width * 0.43}px;
  height: ${constans.width * 0.43}px;
  border-radius: ${constans.width * 0.2}px;
`;
const Touchable = styled.TouchableOpacity``;
const InfoView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const BodyView = styled.View`
  flex: 2;
`;

const Text = styled.Text``;

const Mypage = ({ navigation }) => {
  const [isModal, setIsModal] = useState(false);
  const onPress = () => {
    setIsModal(!isModal);
  };
  return (
    <View>
      <HeaderView>
        <AvatarView>
          <Touchable onPress={onPress}>
            <Avatar
              source={{
                uri:
                  "https://us.123rf.com/450wm/bee32/bee321509/bee32150900030/44673539-유기-토양에서-씨앗에서-자라는-녹색-새싹.jpg?ver=6",
              }}
            />
          </Touchable>
        </AvatarView>
        <InfoView></InfoView>
      </HeaderView>
      <BodyView>
        <Text>MyPage</Text>
      </BodyView>
      {isModal && <Modal onPress={onPress} />}
    </View>
  );
};

export default Mypage;
