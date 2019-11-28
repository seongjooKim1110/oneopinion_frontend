import React, { useState } from "react";
import styled from "styled-components";
import constans from "../constans";

const Wrapper = styled.View`
  position: absolute;
  width: ${constans.width};
  height: ${constans.height};
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CalendarView = styled.View`
  margin-top: ${constans.height / 5};
  padding: 30px;
  border-radius: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  align-items: center;
`;

const YearText = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;

const MonthWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
const MonthText = styled.Text`
  margin: 0px 10px;
  font-size: 20px;
`;

const DaysWrapper = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
`;

const Days = styled.View``;

const DayWrapper = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
`;

const DayTouchableView = styled.TouchableOpacity`
  width: 10%;
`;

const DayView = styled.View`
  width: 10%;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100;
  border: 1px solid black;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const View = styled.View``;

const TouchableOpacity = styled.TouchableOpacity``;

function Calendar({ endDate, setEndDateValue }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [year, setYear] = useState(endDate[0]);
  const [month, setMonth] = useState(endDate[1]);
  const [day, setDay] = useState(endDate[2]);
  const getDay = new Date(year, month, 1).getDay();
  const now = new Date();
  const monthOfDay = [];
  const splitSeven = [];
  let lastMonthLastDay;
  if (getDay > 0) {
    lastMonthLastDay = lastMonthDay(year, month);
  }
  for (let i = 1; i <= getDay; i++) {
    monthOfDay.push(lastMonthLastDay - getDay + i);
  }
  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    monthOfDay.push(i);
  }
  let i = 0;
  while (i < 7) {
    if (monthOfDay.length % 7 === 0) {
      break;
    }
    monthOfDay.push(i);
    i++;
  }

  for (let i = 0; i < monthOfDay.length / 7; i++) {
    splitSeven.push(monthOfDay.slice(i * 7, (i + 1) * 7));
  }
  function lastMonthDay(year, month) {
    let newY = year;
    let newM = month;
    if (month === 0) {
      newY = year - 1;
      newM = 12;
    }
    return new Date(newY, newM, 0).getDate();
  }

  function nextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  function preMonth() {
    if (year > now.getFullYear() || month > now.getMonth()) {
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
      } else {
        setMonth(month - 1);
      }
    }
  }

  function onPress(chooseDay) {
    if (
      year > now.getFullYear() ||
      (year === now.getFullYear() &&
        (month > now.getMonth() ||
          (month === now.getMonth() && chooseDay >= now.getDate())))
    ) {
      setDay(chooseDay);
    }
  }

  return (
    <Wrapper>
      <CalendarView>
        <Header>
          <YearText>{year}년</YearText>
          <MonthWrapper>
            <TouchableOpacity onPress={preMonth}>
              <MonthText>{"<"}</MonthText>
            </TouchableOpacity>
            <MonthText>{month + 1}월</MonthText>
            <TouchableOpacity onPress={nextMonth}>
              <MonthText>{">"}</MonthText>
            </TouchableOpacity>
          </MonthWrapper>
        </Header>
        <DaysWrapper>
          {days.map(el => (
            <Days key={el}>
              <Text>{el}</Text>
            </Days>
          ))}
        </DaysWrapper>
        {splitSeven.map((el, index) => {
          return (
            <DayWrapper key={index}>
              {el.map((dayEl, dayIndex) => {
                if ((index === 0 && dayEl > 7) || (index > 1 && dayEl < 7)) {
                  return (
                    <DayView key={dayIndex}>
                      <Text style={{ color: "grey" }}>{dayEl}</Text>
                    </DayView>
                  );
                } else {
                  return (
                    <DayTouchableView
                      key={dayIndex}
                      style={{
                        backgroundColor: dayEl === day ? "#A7E4F2" : "white"
                      }}
                      onPress={() => {
                        onPress(dayEl);
                      }}
                    >
                      <Text>{dayEl}</Text>
                    </DayTouchableView>
                  );
                }
              })}
            </DayWrapper>
          );
        })}
        <ButtonWrapper>
          <Button
            style={{ marginRight: 5 }}
            onPress={() => {
              setEndDateValue([year, month, day]);
            }}
          >
            <Text>확인</Text>
          </Button>
          <Button
            onPress={() => {
              setEndDateValue(endDate);
            }}
          >
            <Text>취소</Text>
          </Button>
        </ButtonWrapper>
      </CalendarView>
    </Wrapper>
  );
}

export default Calendar;
