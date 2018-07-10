import React , { Component }from 'react';
import {ActivityIndicator, StyleSheet, Text, View , StatusBar} from 'react-native';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded:true
  };

  render() {

    const { isLoaded } = this.state;
      return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          {isLoaded ? <Weather/> :( <View style={styles.loading}>
              <Text style={styles.loadingText}>
                Getting the Weather
              </Text>
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#FFF',
  },
    loading:{
    flex:1,
    backgroundColor:'#FDF6AA',
        justifyContent:'flex-end',
        paddingLeft:24,
        paddingRight:24
    },
    loadingText:{
    fontSize: 38,
        marginBottom:100
    }
});
