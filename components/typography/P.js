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

export default class P extends React.Component {
  static propTypes = {
    children: PropTypes.string
  };

  render() {
    const { children } = this.props;
    return <Text style={styles.paragraph}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    marginBottom: 20
  }
});
