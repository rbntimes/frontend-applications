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

import questionList from "../../constants/Questions";
import { Youth } from "../../constants/Users";
import Question from "../../components/Question";

export default class ScoreScreen extends React.Component {
  static navigationOptions = {
    title: Youth[0].name
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>
          {`${(
            Math.random() * this.props.navigation.getParam("questionId", 1)
          ).toFixed(2)}%`}
        </Text>
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
