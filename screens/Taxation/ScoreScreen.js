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
import { Youth } from "../../constants/Users";
import P from "../../components/typography/P";

import ProgressCircle from "react-native-progress-circle";
import { ScoreContext } from "../../Provider";

import frtg from "from-red-to-green";

export default class ScoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("user", ""),
    headerLeft: (
      <HeaderBackButton
        onPress={() => {
          navigation.navigate("Questions", {
            questionId: 21
          });
        }}
        title="Vorige"
      />
    ),
    headerRight: (
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Opslaan"
        color="#000"
      />
    )
  });

  render() {
    return (
      <ScoreContext.Consumer>
        {context => (
          <View style={styles.container}>
            <View style={styles.progressContainer}>
              <Text
                style={{
                  fontSize: 50,
                  color: frtg(Math.max(0, Number(1 / Math.ceil(context.score))))
                }}
              >
                {context.score}%
              </Text>
              <P>
                {context.user} heeft een {`${context.score}% `}
                risico op een zware maatregel. De score is als volgt de
                verdelen:
              </P>
              <View>
                <P>0 - 2%: Laag risico</P>
                <P>2 - 5%: Middelmatig risico</P>
                <P>5% en hoger: Hoog risico</P>
              </View>
            </View>
          </View>
        )}
      </ScoreContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    height: "100%",
    backgroundColor: "#fff"
  },
  progressContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
