// @flow
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 96px;
  color: #323232;
  font-family: "Baskerville";
`;

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>#WTFJHT!?</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WTFJHT", () => App);
