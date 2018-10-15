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

export default class Title extends React.Component {
  static propTypes = {
    children: PropTypes.string
  };

  render() {
    const { children } = this.props;
    return <Text style={styles.title}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20
  }
});
