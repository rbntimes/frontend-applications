import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  Alert,
  Text
} from "react-native";

import frtg from "from-red-to-green";

import { HeaderBackButton } from "react-navigation";
import questionList from "../../constants/Questions";
import Question from "../../components/Question";
import { ScoreContext } from "../../Provider";

export default class QuestionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <ScoreContext.Consumer>
        {context => (
          <Text
            style={{
              color: frtg(Math.max(0, Number(1 / Math.ceil(context.score)))),
              padding: 5,
              fontSize: 17
            }}
          >
            {context.score}
          </Text>
        )}
      </ScoreContext.Consumer>
    ),
    title: questionList[navigation.getParam("questionId", 1)].category,
    headerLeft: (
      <HeaderBackButton
        title={
          navigation.getParam("questionId", 0) === 0 ? "Sluiten" : "Vorige"
        }
        onPress={() => {
          navigation.getParam("questionId", 0) === 0
            ? navigation.navigate("Home")
            : navigation.navigate("Questions", {
                questionId: navigation.getParam("questionId", 2) - 1
              });
        }}
      />
    )
  });

  handleChange(questionId, value, context) {
    if (questionId !== questionList.length - 1) {
      context.addToScore({ [questionId]: value });
      this.props.navigation.navigate("Questions", {
        questionId: questionId + 1
      });
    } else {
      context.addToScore({ [questionId]: value });
      this.props.navigation.navigate("Score", {
        user: context.user
      });
    }
  }

  render() {
    const { navigation } = this.props;
    const questionId = navigation.getParam("questionId", 1);

    return (
      <ScoreContext.Consumer>
        {context => (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <Question
              onChange={value => this.handleChange(questionId, value, context)}
              label={questionList[questionId].question}
              options={questionList[questionId].options}
            />
            {console.log(context)}
          </ScrollView>
        )}
      </ScoreContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%"
  },
  contentContainer: {
    minHeight: "100%",
    justifyContent: "space-between"
  }
});
