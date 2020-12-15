/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Axios from 'axios';
import Loading from './../component/Loading';
import qs from 'qs';
import {SafeAreaView} from "react-native-safe-area-context";
import { Input } from 'react-native-elements';


export default class FirstScreen extends Component{

  constructor(props) {
      super(props);

      this.state = {
          isLoading: false,
          phoneNumber: '',
          password:'',
          errorPhone:false,
          errorPassword:false
      }
  }

  register() {
      this.props.navigation.navigate('SplashScreen');
  }

  login() {
      if (this.state.phoneNumber === '' || this.state.password === ''){
          ToastAndroid.show("Phone number or Password cant empty", ToastAndroid.SHORT);
          return;
      }

      console.log("DATA : " + this.state.phoneNumber + "  " + this.state.password);
      this.setState({
          isLoading: !this.state.isLoading
      });

      let js = {
          phone: this.state.phoneNumber,
          password: this.state.password
      };

      Axios.post('http://192.168.43.180:8080/api/users/login', qs.stringify(js), {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
          }
      }).then((response) => {
          console.log(response);
          ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
      }).finally(() => {
          this.setState((s) => s.isLoading = !this.state.isLoading);
      });
  }

  render() {
      return (
          <SafeAreaView style={{backgroundColor: 'dodgerblue'}}>
              <StatusBar translucent={true} backgroundColor="dodgerblue" barStyle="light-content"/>
              <View
                  style={{
                      backgroundColor: '#303846',
                      height: '100%',
                      flexDirection: 'column',
                  }}>
                  <Loading isloading={this.state.isLoading}/>
                  <View
                      style={{
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          height: '50%',
                          width: '100%',
                          alignContent: 'center',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          flexDirection: 'column',
                          backgroundColor: 'dodgerblue',
                          position: 'absolute',
                      }}>
                      <View style={{alignItems: 'center'}}>
                          <Image
                              style={{width: 75, height: 75}}
                              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                          />
                          <Text
                              style={{
                                  textAlign: 'center',
                                  color: 'white',
                                  fontWeight: 'bold',
                                  marginTop: '5%',
                                  marginBottom: '20%',
                                  fontFamily: 'Roboto'
                              }}>
                              Hello This my FirstApp
                          </Text>

                      </View>
                  </View>

                  <View style={{alignItems: 'center', flexDirection: 'column'}}>
                      <Card style={{marginTop: "70%", padding: 16, flexDirection: "column"}}>
                          {/*<Text style={{fontSize: 16, marginBottom: 8, fontWeight: "bold", fontFamily: 'Roboto'}}>Phone</Text>*/}
                          <Input
                              onChangeText={(text) => this.setState({phoneNumber: text, errorPhone: text.length === 0})}
                              placeholder="08xx..."
                              inputStyle={{borderWidth: 1, borderBottomWidth: 0, borderColor: 'gray',}}
                              containerStyle={{paddingHorizontal: 0, paddingVertical: 0,}}
                              label="Phone"
                              textContentType="telephoneNumber"
                              keyboardType="phone-pad"
                              labelStyle={{fontSize: 16, marginBottom: 8, color: 'black', fontWeight: "bold", fontFamily: 'Roboto'}}
                              errorMessage={this.state.errorPhone ? '*This field required' : ''}
                              renderErrorMessage={this.state.errorPhone}
                              value={this.state.phoneNumber}
                          />

                          {/*<Text style={{fontSize: 16, marginTop: 16, marginBottom: 8, fontWeight: "bold"}}>Password</Text>*/}
                          <Input
                              inputStyle={{borderWidth: 1, borderBottomWidth: 0, borderColor: 'gray',}}
                              containerStyle={{marginTop: 8, marginBottom: 8, paddingHorizontal: 0, paddingVertical: 0,}}
                              placeholder="6 or more characters"
                              label="Password"
                              labelStyle={{fontSize: 16, marginBottom: 8, color: 'black', fontWeight: "bold", fontFamily: 'Roboto'}}
                              onChangeText={(text) => this.setState({password: text, errorPassword: text.length === 0})}
                              secureTextEntry={true}
                              errorMessage={this.state.errorPassword ? '*This field required' : ''}
                              renderErrorMessage={this.state.errorPassword}
                              value={this.state.password}
                          />
                      </Card>
                      <Text style={{fontSize: 14, marginTop: 12, color: 'white'}}> Hello this is my first app in react native </Text>
                  </View>
                  <View style={{position: 'relative', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', flex: 1, margin: 16}}>
                      <TouchableOpacity
                          style={{
                              flex: 1,
                              borderRadius: 10,
                              padding: 16,
                              marginRight: 8,
                              backgroundColor:'#303846',
                              alignItems: 'center',
                              borderWidth: 1,
                              borderColor: 'dodgerblue'
                          }}
                          activeOpacity = { .5 }
                          onPress={() => this.register()}>

                          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'dodgerblue'}}> Register </Text>

                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{
                              flex: 1,
                              marginLeft: 8,
                              borderRadius: 10,
                              padding: 16,
                              backgroundColor:'dodgerblue',
                              alignItems: 'center',
                          }}
                          activeOpacity = { .5 }
                          onPress={() => this.login()}>

                          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}> Login </Text>

                      </TouchableOpacity>
                  </View>
              </View>
          </SafeAreaView>
      );
  }

}
