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

import { HeaderBackButton } from "react-navigation";
import questionList from "../../constants/Questions";
import { Jarno } from "../../constants/Users";
import Question from "../../components/Question";

export default class QuestionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title={`${(
          Math.random() * navigation.getParam("questionId", 1)
        ).toFixed(2)}%`}
        color="#000"
      />
    ),
    headerLeft: (
      <HeaderBackButton
        title="Vorige"
        onPress={() => {
          navigation.navigate("Questions", {
            questionId: navigation.getParam("questionId", 2) - 1
          });
        }}
      />
    )
  });
  render() {
    const { navigation } = this.props;
    const questionId = navigation.getParam("questionId", 1);

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ flex: 1, width: "100%" }}>
          <Question
            onChange={() =>
              questionId !== questionList.length - 1
                ? navigation.navigate("Questions", {
                    questionId: questionId + 1
                  })
                : navigation.navigate("Score")
            }
            label={questionList[questionId].question}
            options={questionList[questionId].options}
          />
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
    paddingTop: 30,
    justifyContent: "space-between"
  }
});
