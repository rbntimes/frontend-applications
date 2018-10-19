import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";

export const ScoreContext = React.createContext();

class ScoreProvider extends React.Component {
  constructor(props) {
    super(props);

    this.addToScore = score => {
      this.setState(state => {
        return {
          score: Number(
            (
              (1 /
                (1 +
                  Math.exp(
                    -1 *
                      (-8.57219 +
                        this.state.answers.reduce(
                          (prev, next) =>
                            Number(prev) + Number(Object.values(next)),
                          0
                        ))
                  ))) *
              100
            ).toFixed(2)
          ),
          answers: [...this.state.answers, score]
        };
      });
    };

    this.addUser = user => {
      this.setState({
        user,
        answers: [],
        score: 0.01
      });
    };

    this.state = {
      score: 0.01,
      answers: [],
      addToScore: this.addToScore,
      user: "",
      addUser: this.addUser
    };
  }

  render() {
    return (
      <ScoreContext.Provider value={this.state}>
        {this.props.children}
      </ScoreContext.Provider>
    );
  }
}

export default ScoreProvider;
