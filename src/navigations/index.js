import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './customDrawer';
import SupportScreen from '../screens/Support/index';
import SettingsScreen from '../screens/Settings/index';
import BookmarkScreen from '../screens/Bookmark/index';
import HomeScreen from '../screens/Home/index';
import ProfileScreen from '../screens/Profile';
import RootStackScreen from './rootStackNavigation/index';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;
