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

import QRCode from "react-native-qrcode";

export default class Scan extends React.Component {
  static navigationOptions = {
    title: "Scan QR"
  };

  constructor(props) {
    super(props);

    this.state = {
      data: "test"
    };
  }

  deserializeData = data => {
    this.props.navigation.navigate("Users", {
      answers: data
        .split("&")
        .map(a => ({ [a.split("=")[0]]: a.split("=")[1] }))
    });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <BarCodeScanner
          style={{ flex: 1 }}
          onBarCodeScanned={({ type, data, target }) =>
            this.deserializeData(data)
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
    paddingTop: 30,
    height: "100%"
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
