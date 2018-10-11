import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";

import questionList from "../constants/Questions";
import { Jarno } from "../constants/Users";
import Question from "../components/Question";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: Jarno.name
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ width: "100%" }}>
          {Object.keys(questionList).map(question => (
            <Question
              key={question}
              label={question}
              options={questionList[question]}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  Question: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
