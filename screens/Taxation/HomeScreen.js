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

import { Icon } from "expo";

import questionList from "../../constants/Questions";
import { Youth, Martin } from "../../constants/Users";
import Question from "../../components/Question";
import P from "../../components/typography/P";
import Title from "../../components/typography/Title";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: Martin.name
  };

  render() {
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
          <Icon.Ionicons
            name="ios-paper-outline"
            size={72}
            style={styles.icon}
          />
          <Title>Inleiding</Title>
        </View>
        <P>
          Deze beslissingondersteuningstool kan gebruikt worden door
          hulpverleners om een objectieve risico-indicatie te krijgen op een
          zwaardere maatregel op basis van kenmerken van het kind, de ouders en
          het huishouden. Onder zwaardere maatregelen vallen in dit geval
          jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en
          jeugdreclasseringsmaatregelen.
        </P>
        <Button
          title="+ Nieuwe taxatie"
          onPress={() =>
            this.props.navigation.navigate("Questions", {
              questionId: 0
            })
          }
        />
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
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20
  },
  icon: {
    textAlign: "center"
  }
});
