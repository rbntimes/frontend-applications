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
      <View
        style={{
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View>
          <Text style={styles.Question}>{this.props.label}</Text>
          {options.map(option => (
            <View
              key={`${option.label}-${option.value}`}
              style={{
                padding: 5,
                textAlign: "center"
              }}
            >
              <Button
                onPress={() => onChange(option.value)}
                title={option.label}
              />
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
