import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { BarCodeScanner } from "expo";

import { deserialize } from "../../utils";
import P from "../../components/typography/P";

export default class Scan extends React.Component {
  static navigationOptions = {
    title: "Scan QR"
  };

  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          style={{ flex: 1 }}
          onBarCodeScanned={({ type, data, target }) => {
            this.props.navigation.navigate("Users", {
              answers: deserialize(data)
            });
          }}
        />
        <P>
          Houdt de camera gericht naar een QrCode. Dan kunt u de gegevens{" "}
          <Text style={{ fontWeight: "bold" }}>anoniem</Text> inzien.
        </P>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff"
  }
});
