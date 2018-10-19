import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Share
} from "react-native";

import { HeaderBackButton } from "react-navigation";
import answers from "../../constants/Answers";
import { serialize } from "../../utils";
import QRCode from "react-native-qrcode";
import P from "../../components/typography/P";
import { ScoreContext } from "../../Provider";

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Deel QR code",
    headerLeft: (
      <HeaderBackButton
        title="Vorige"
        onPress={() => {
          navigation.navigate("Users", {
            user: navigation.getParam("user", "")
          });
        }}
      />
    ),
    headerRight: (
      <Button
        onPress={() =>
          Share.share(
            {
              message: "Zou jij eens naar de volgende taxatie kunnen kijken? ",
              url: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${serialize(
                answers
              )}`,
              title: "Wow, did you see that?"
            },
            {}
          )
        }
        title="E-mail"
        color="#000"
      />
    )
  });

  render() {
    return (
      <ScoreContext.Consumer>
        {context => (
          <View style={styles.container}>
            <P>
              Deel deze code met collega's. Zij krijgen dan inzicht in de
              taxatie die jij hebt gemaakt en kunnen eventueel feedback geven.
            </P>
            {console.log(context.answers, serialize(context.answers))}
            <QRCode
              value={serialize(answers)}
              size={200}
              bgColor="black"
              fgColor="white"
            />
            <P>
              Geen zorgen, dit is allemaal{" "}
              <Text style={{ fontWeight: "bold" }}>anoniem</Text>!
            </P>
          </View>
        )}
      </ScoreContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center"
  }
});
