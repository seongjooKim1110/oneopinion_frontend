import React, { useState } from "react";
import { DatePickerIOS, DatePickerAndroid } from "react-native";
import styled from "styled-components";
import { Platform } from "@unimodules/core";

const View = styled.View``;

const TouchableOpacity = styled.TouchableOpacity``;

const Text = styled.Text``;

function DatePicker() {
  async function datePick() {}

  const [date, setDate] = useState(new Date());
  return (
    <View>
      {Platform.OS === "ios" ? (
        <DatePickerIOS
          date={date}
          onDateChange={setDate}
          mode={"date"}
          minimumDate={new Date()}
        />
      ) : (
        <TouchableOpacity onPress={datePick}>
          <Text>설정</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default DatePicker;
