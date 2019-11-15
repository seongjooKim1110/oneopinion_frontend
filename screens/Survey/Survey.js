import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Init from "./Init";

const View = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const Survey = ({ navigation }) => {
  const [init, setInit] = useState(false);
  return (
    <View>
      {!init && <Init />}
      <Text>Survey</Text>
    </View>
  );
};

export default Survey;
