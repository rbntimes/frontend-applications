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
    label: PropTypes.string,
    options: PropTypes.array
  };

  render() {
    const { options, label, onChange } = this.props;
    return (
      <View>
        <Text style={styles.Question}>{this.props.label}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {options.map(option => (
            <View
              key={option}
              style={{
                width: "80%",
                padding: 10
              }}
            >
              <Button onPress={onChange} title={option} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Question: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
