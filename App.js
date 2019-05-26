/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate("Details")}
            title="Detail"
            color="#841584"
            accessibilityLabel="Detail about this purple button"
          />
        </View>
      </View>
    );
  }
}
class DetailsScreen extends Component {
  static navigationOptions = {
    title: "Phi Hai's Page"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          This is a bit about Phi Hai Nguyen and who he is as a developer
        </Text>
        <Text>Lorem Ipsum</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  { initialRouteName: "Home" }
);
const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    backgroundColor: "pink"
  }
});
