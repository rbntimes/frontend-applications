import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  Button
} from "react-navigation";

import questionList from "../constants/Questions";

import TabBarIcon from "../components/TabBarIcon";

import TaxationHome from "../screens/Taxation/HomeScreen";
import QuestionScreen from "../screens/Taxation/QuestionScreen";
import ScoreScreen from "../screens/Taxation/ScoreScreen";

const HomeStack = createStackNavigator({
  Home: TaxationHome,
  Questions: {
    screen: QuestionScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Vraag ${navigation.state.params.questionId + 1}/${
        questionList.length
      }`
    })
  },
  Score: ScoreScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Risicoinventaris",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-paper${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack
});
