import React ,{Component} from 'react';
import {StyleSheet , Text , View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';


const weatherCases = {
  Rain : {
      colors:["#00C6FB", "#005BEA"],
      title: '비가 내리네요.',
      subtitle:"우산을 챙겨 가세요.",
      icon:"ios-rainy"
  },
  Clear:{
      colors:["#FEF253", "#FF7300"],
      title: '해가 쨍쨍.',
      subtitle:"빨래 널기 좋은날",
      icon:"ios-sunny"
  },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: '천둥 번개.',
        subtitle:"각별히 조심하세요",
        icon:"ios-thunderstorm"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: '구름구름',
        subtitle:"흐린 날씨입니다.",
        icon:"ios-cloudy"
    },Snow:{
        colors:["#7DE2FC", "#8986E5"],
        title: '눈온다.',
        subtitle:"눈 싸움하자.",
        icon:"ios-snow"
    },Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: '보슬비',
        subtitle:"보슬비가 내립니다.",
        icon:"ios-rainy-outline"
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title: '안개',
        subtitle:"안보임",
        icon:"ios-rainy-outline"
    }
};

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>
                    {temp}℃
                </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>
                    {weatherCases[weatherName].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    upper:{
        flex:1,
        alignItems:"center",
        backgroundColor:"transparent",
        justifyContent:"center"
    },
    temp:{
      fontSize:28,
        backgroundColor:"transparent",
        color:"#ffffff",
        marginBottom:25,
        marginTop:10
    },
    lower:{
      flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25,
        marginBottom:25
    },
    title:{
        fontSize:38,
        backgroundColor:"transparent",
        color:"#ffffff",
        marginBottom:10,
        fontWeight:"300"
    },
    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"#ffffff",
        marginBottom:25
    },
});
