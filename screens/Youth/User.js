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

import { Icon, BarCodeScanner, Permissions } from "expo";

import { AnswerString2 } from "../../constants/Answers";
import { Youth, Martin } from "../../constants/Users";
import generatedUsers from "../../constants/GeneratedUsers";
import ClientList from "../../components/ClientList";
import Score from "../../components/Score";
import P from "../../components/typography/P";
import Title from "../../components/typography/Title";
import questionList from "../../constants/Questions";

import QRCode from "react-native-qrcode";

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("user", "anoniem"),
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title={`${(Math.random() * 5).toFixed(2)}%`}
        color="#000"
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      user: generatedUsers.find(
        user => user.name.first === props.navigation.getParam("user", false)
      ),
      data: "test",
      answers: props.navigation.getParam("answers", [])
    };
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <Icon.Ionicons name="ios-people" size={72} style={styles.icon} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          {this.state.user && (
            <QRCode
              value={AnswerString2}
              size={150}
              bgColor="purple"
              fgColor="white"
            />
          )}
        </View>
        <View style={{ flex: 1 }}>
          {questionList.map(({ question, options }, index) => (
            <View
              key={question}
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  width: "100%",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                {question}:
              </Text>
              <Text>
                {
                  options[
                    Object.values(this.state.answers[index] || { a: "b" })
                  ]
                }
              </Text>
            </View>
          ))}
        </View>
        <Score score={3.45} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center"
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
  item: {
    color: "#000",
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
