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

import { Icon } from "expo";

import questionList from "../../constants/Questions";
import { Youth, Martin } from "../../constants/Users";
import generatedUsers from "../../constants/GeneratedUsers";
import ClientList from "../../components/ClientList";
import P from "../../components/typography/P";
import Title from "../../components/typography/Title";
import { ScoreContext } from "../../Provider";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: Martin.name,
    headerRight: (
      <Button
        onPress={() => navigation.navigate("ScanQr")}
        title="Scan"
        color="#000"
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUsers = (users, context) => {
    // Never fully understood how .reduce work but knew i needed this:
    // https://stackoverflow.com/questions/46397638/react-native-how-to-add-alphabet-order-on-side-in-section-list
    // And this, idk really
    // https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra

    if (context.user && !users.find(user => user.name === context.user)) {
      users.push({ name: context.user });
    }

    return Object.keys(users)
      .reduce(function(list, user, index) {
        let listItem = list.find(
          item =>
            item.title &&
            item.title === users[user].name.slice(0, 1).toLowerCase()
        );
        if (!listItem) {
          list.push({
            title: users[user].name.slice(0, 1).toLowerCase(),
            data: [users[user].name]
          });
        } else {
          listItem.data.push(users[user].name);
        }

        return list;
      }, [])
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  render() {
    return (
      <ScoreContext.Consumer>
        {context => (
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
              <Title>Mijn clienten</Title>
            </View>
            <P>
              Hieronder vind je een lijst met eerder gemaakte taxaties, die kan
              je delen met collega's.
            </P>
            <View style={{ height: "50%" }}>
              <SectionList
                sections={this.getUsers(generatedUsers, context)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("Users", {
                        user: item,
                        score:
                          context.score > 0.01
                            ? context.score
                            : Number(Math.random() * 20).toFixed(2)
                      })
                    }
                  >
                    <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
              />
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
