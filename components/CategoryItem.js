import React from "react";
import styled from "styled-components";

const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
`;

const H5 = styled.Text`
  font-size: 14px;
  margin: 5px 0px;
`;

const CheckBox = styled.View`
  margin: 9px 5px 7px 0px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid black;
`;

function CategoryItem({ text, select, setCategory }) {
  const onPress = () => setCategory(text);
  return (
    <TouchableOpacity onPress={onPress}>
      <CheckBox
        style={{ backgroundColor: text === select ? "black" : "white" }}
      />
      <H5>{text}</H5>
    </TouchableOpacity>
  );
}

export default CategoryItem;
