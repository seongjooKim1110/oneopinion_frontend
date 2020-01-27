import React, { useState } from "react";
import styled from "styled-components";
import Make from "./Make";
import Init from "./Init";

const View = styled.View`
  flex: 1;
`;
const TouchableOpacity = styled.TouchableOpacity``;
const Text = styled.Text``;

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      isMakeInit: true,
      serveyProcedure: [],
      data: [
        {
          category: "정치/경제",
          describe: "2",
          endDate: [2019, 11, 3],
          isAnony: false,
          subject: "1"
        },
        {
          answer: ["", ""],
          class: "checkcircleo",
          isRequire: false,
          title: "",
          start: 1,
          end: 10
        }
      ]
    };
    navigation.setParams({
      isMakeInit: this.state.isMakeInit
    });
  }
  static navigationOptions = ({ navigation }) => {
    const isMakeInit = navigation.getParam("isMakeInit");
    function postSurvey(DATA) {
      console.log(DATA);
      //posting
    }

    return {
      headerRight: isMakeInit && (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => {
            const DATA = navigation.getParam("data");
            postSurvey(DATA);
          }}
        >
          <Text>완료</Text>
        </TouchableOpacity>
      )
    };
  };

  toMake = DATA => {
    const data = this.state.data;
    data[0] = DATA;
    const newData = data.slice();
    this.setState({ data: newData, isMakeInit: true });
  };

  render() {
    return (
      <Controll
        isMakeInit={this.state.isMakeInit}
        surveyProcedure={this.state.serveyProcedure}
        data={this.state.data}
        toMake={this.toMake}
        postSurvey={this.postSurvey}
        navigation={this.props.navigation}
      />
    );
  }
}

function Controll({ navigation, isMakeInit, data, toMake }) {
  return (
    <View>
      {isMakeInit ? (
        <Make DATA={data} navigation={navigation} />
      ) : (
        <Init initData={data[0]} toMake={toMake} />
      )}
    </View>
  );
}

export default Header;
