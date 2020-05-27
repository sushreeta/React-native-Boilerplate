import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from './customDrawer';
import SupportScreen from '../screens/Support/index';
import SettingsScreen from '../screens/Settings/index';
import BookmarkScreen from '../screens/Bookmark/index';
import HomeScreen from '../screens/Home/index';
import ProfileScreen from '../screens/Profile';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: 'Overview',
//         headerLeft: () => {
//           <Icon.Button
//             name="menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => {
//               navigation.openDrawer();
//             }}
//           />;
//         },
//       }}
//     />
//   </HomeStack.Navigator>
// );

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name="Home"
      component={DetailsScreen}
      options={{
        title: 'Overview',
        headerLeft: () => {
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />;
        },
      }}
    />
  </DetailStack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailStackScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
