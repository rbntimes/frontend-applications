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
import TaxationUser from "../screens/Taxation/User";
import QuestionScreen from "../screens/Taxation/QuestionScreen";
import ScoreScreen from "../screens/Taxation/ScoreScreen";

import YouthHome from "../screens/Youth/HomeScreen";
import User from "../screens/Youth/User";
import Scan from "../screens/Youth/Scan";
import QrCode from "../screens/Youth/QrCode";

const HomeStack = createStackNavigator({
  Home: TaxationHome,
  User: TaxationUser,
  Questions: QuestionScreen,
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

const YouthStack = createStackNavigator({
  Home: YouthHome,
  Users: User,
  ScanQr: Scan,
  ShowQr: QrCode
});

YouthStack.navigationOptions = {
  tabBarLabel: "Mijn clienten",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-people${focused ? "" : "-outline"}`
          : "md-people"
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  YouthStack
});
