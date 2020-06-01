import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../screens/Splash/index';
import SignInScreen from '../../screens/SignIn/index';
import SignUpScreen from '../../screens/SignUp/index';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
