
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  onPress = () => {
    this.setState({
      data: 'TEXT TEXT TEXT'
    });
  };

  render() {
    const { data } = this.state;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text>Nacitaj Kartu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textOutput}>
          <Text> {data}</Text>
        </View>


      </SafeAreaView>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    margin: 10,
    marginHorizontal: 30,
    height: 40,
    padding: 8,
  },
  textOutput: {
    flex: 1,
    marginTop: 120,
  },
});


