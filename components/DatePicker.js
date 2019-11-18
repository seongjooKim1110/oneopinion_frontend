import React, { useState } from "react";
import { DatePickerIOS, DatePickerAndroid } from "react-native";
import styled from "styled-components";
import { Platform } from "@unimodules/core";

const View = styled.View``;

const TouchableOpacity = styled.TouchableOpacity``;

const Text = styled.Text``;

function DatePicker() {
  async function datePick() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      console.log(year, month, day);
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

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
