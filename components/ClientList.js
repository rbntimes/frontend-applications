import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  StyleSheet,
  Alert
} from "react-native";

export default class Question extends React.Component {
  static propTypes = {
    data: PropTypes.array
  };

  render() {
    const { data } = this.props;

    return (
      <View>
        {data.map(client => (
          <View style={styles.Client}>
            <Text>{client.name}</Text>
            <Text>{`${(Math.random() * 5).toFixed(2)}%`}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Client: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    margin: 10
  }
});
