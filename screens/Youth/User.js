import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  SectionList
} from "react-native";

import generatedUsers from "../../constants/GeneratedUsers";
import questionList from "../../constants/Questions";
import { serialize } from "../../utils";
import { ScoreContext } from "../../Provider";

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("score", 5)}%`,
    headerRight: navigation.getParam("user", false) && (
      <Button
        onPress={() =>
          navigation.navigate("ShowQr", {
            user: navigation.getParam("user", "")
          })
        }
        title="Deel de QR"
        color="#000"
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      user: generatedUsers.find(
        user => user.name === props.navigation.getParam("user", false)
      ),
      data: this.getAnswers(questionList),
      answers: props.navigation.getParam("answers", [])
    };
  }

  getAnswers = questions => {
    return questions.reduce(function(list, question, index) {
      let listItem = list.find(
        item => item.title && item.title === question.category
      );
      if (!listItem) {
        list.push({
          title: question.category,
          data: [
            {
              question: question.question,
              answer: question.options[0].label,
              unknown:
                question.options[0].label.toLowerCase().indexOf("onbekend") !==
                -1
            }
          ]
        });
      } else {
        listItem.data.push({
          question: question.question,
          answer: question.options[0].label,
          unknown:
            question.options[0].label.toLowerCase().indexOf("onbekend") !== -1
        });
      }

      return list;
    }, []);
  };

  render() {
    return (
      <ScoreContext.Consumer>
        {context => (
          <View style={styles.container}>
            {this.props.navigation.getParam("user", false) ? (
              <Text style={{ textAlign: "center", fontSize: 18, padding: 10 }}>
                {this.props.navigation.getParam("user", false)}
              </Text>
            ) : (
              <View />
            )}
            {console.log(context)}
            <SectionList
              sections={this.state.data}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Text style={styles.itemHeader}>{item.question}:</Text>
                  <Text
                    style={{
                      color: item.unknown ? "orange" : "black",
                      padding: 10,
                      fontSize: 14
                    }}
                  >
                    {item.answer}
                  </Text>
                </View>
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        )}
      </ScoreContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 10,
    backgroundColor: "#fff"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  itemHeader: {
    color: "#000",
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold"
  }
});
