import React, {Component} from 'react';
import {
    View,
    Image,
    StatusBar
} from 'react-native';

function SplashScreen({navigation}){

    setTimeout(() => {
        console.log("TIMEOUT");
        navigation.replace('Login');
    }, 3000);

    return(
        <View style={{
            height: '100%',
            backgroundColor: 'dodgerblue',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content"/>
            <Image
                style={{width: 75, height: 75}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
        </View>
    );
}

export default SplashScreen;