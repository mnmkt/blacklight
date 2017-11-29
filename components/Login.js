'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ImageBackground } from 'react-native';
import { FormLabel, FormInput, Button, Text, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';



import { emailChanged, passwordChanged, createUserOnServer, getUser } from '../store';

// import wallpaper from '../images/wallpaper.jpg'

class Login extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  handleSubmit() {
    const { email, password } = this.props
    this.props.createUserOnServer({ email, password })
    Actions.root();
  }
  handleLogin() {
    const { email, password } = this.props;
    // const email = 'cody@email.com'
    // const password = '123'
    this.props.getUser({ email, password });
    Actions.root();
  }

  render() {
    const { textStyle } = styles
    return (
      <ImageBackground
      source={ require('../images/wallpaper.jpg') }
      style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>BLACKLIGHT</Text>
        </View>

        <View>
        <FormLabel>
          Email
        </FormLabel>
          <FormInput style={styles.input}
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            />
          <FormLabel>
            PW
          </FormLabel>
          <FormInput style={styles.input}
             placeholder="Password"
              value="blacklight"
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
            />
          <Button style={styles.buttonStyle}
              small
              backgroundColor='#000000'
              onPress={this.handleLogin.bind(this)}
              title="GUEST"
              />
          <Button style={styles.buttonStyle}
              small
              backgroundColor='#000000'
              onPress={this.handleSubmit.bind(this)}
              title='SIGNUP'
              />
        </View>



      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
})

const mapDispatchToProps = { emailChanged, passwordChanged, createUserOnServer, getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  // textStyle: {
  //   fontSize: 50,
  //   color: 'white',
  // },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'LaoSangamMN'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  // formContainer :{
  //   backgroundColor: 'black',
  //   alignItems: 'center',
  // }
  input: {
    height: 35,
    backgroundColor: 'rgba(192,192,192,0.3)',
    marginBottom: 15,
    // color: '#FFF',
    // paddingHorizontal :10
  },
  buttonStyle: {
    padding: 10
  },
  labelContainerStyle: {
    marginTop: 8
  }
};



// <View>
// <Card title='Signup page'>
//   <FormLabel >Email</FormLabel>
//   <FormInput
//   onChangeText={this.onEmailChange.bind(this)}
// />
//   <FormLabel >Password</FormLabel>
//   <FormInput
//   value="blacklight"
//   secureTextEntry
//   onChangeText={this.onPasswordChange.bind(this)}
//   />
//   <Card>
//   <Button
//     small
//     onPress={this.handleLogin.bind(this)}
//     title='log in' />
//   </Card>
//   <Card>
//   <Button
//     small
//     onPress={this.handleSubmit.bind(this)}
//     title='sign up' />
//  </Card>
//  </Card>
// </View>