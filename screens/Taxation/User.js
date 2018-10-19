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
  TextInput
} from "react-native";

import { Icon } from "expo";

import questionList from "../../constants/Questions";
import { Youth, Martin } from "../../constants/Users";
import Question from "../../components/Question";
import P from "../../components/typography/P";
import Title from "../../components/typography/Title";
import { ScoreContext } from "../../Provider";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Voor wie?",
    headerRight: (
      <ScoreContext.Consumer>
        {context => (
          <Button
            disabled={!context.user}
            onPress={() =>
              navigation.navigate("Questions", {
                questionId: 0,
                user: context.user
              })
            }
            title="Begin"
            color="#000"
          />
        )}
      </ScoreContext.Consumer>
    )
  });

  render() {
    return (
      <ScoreContext.Consumer>
        {context => (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View>
              <Icon.Ionicons name="ios-person" size={72} style={styles.icon} />
              <Title>Voor wie is deze taxatie?</Title>
              <View
                style={{
                  height: 50,
                  padding: 10,
                  marginTop: 30
                }}
              >
                <TextInput
                  autocorrect={false}
                  autoFocus
                  placeholder={`bijv. "Cees Ligtelijn"`}
                  onChangeText={user => context.addUser(user)}
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "rgba(96,100,109, 1)"
                  }}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </ScoreContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "100%",
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    paddingTop: 20
  },
  icon: {
    textAlign: "center"
  }
});
