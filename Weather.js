import React ,{Component} from 'react';
import {StyleSheet , Text , View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';

export default class Weather extends Component{
    render() {
        return(
        <LinearGradient
            colors={["#00C6FB" ,"#005BEA"]}
            style={styles.container}
        >

            <View style={styles.upper}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text style={styles.temp}>
                    29℃
                </Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>
                    비가 올것 같아요.
                </Text>
                <Text style={styles.subtitle}>
                    나가기전 밖을 확인하세요.
                </Text>
            </View>
        </LinearGradient>
        )
    }
}

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
