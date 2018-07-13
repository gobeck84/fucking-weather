import React , { Component }from 'react';
import {ActivityIndicator, StyleSheet, Text, View , StatusBar} from 'react-native';
import Weather from './Weather';


const WEATHER_API_KEY = '610a70adff971cea89f23ae235f017e1';

export default class App extends Component {
  state = {
    isLoaded: false,
      error: null ,
      temperature: null,
      name: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        position => {
            this._getWeather( position.coords.latitude , position.coords.longitude )
        },
        error => {
          this.setState({
              error:error
          })
        }
    )
  }

  _getWeather = (lat , lon ) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                temperature:json.main.temp,
                name:json.weather[0].main,
                isLoaded:true
            });
            console.log(this.state.name);
        });
};

  render() {

    const { isLoaded , error , name ,temperature} = this.state;
      return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          {isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> :( <View style={styles.loading}>
              <Text style={styles.loadingText}>
                Getting the Weather
              </Text>
                  {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
    },
    errorText:{
    color:'red', backgroundColor:'transparent'
    }
});
