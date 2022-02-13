import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import TipsScreen from "./Tips";
import TestsScreen from "./Tests";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeNavigator from "./HomeNavigator";
import TestsNavigator from "./TestsNavigator";
import TipsNavigator from "./TipsNavigator";

 const Tab = createBottomTabNavigator();

 const homeName = "Asosiy";
 const testsName = "Testlar";
 const tipsName = "Maslahatlar`";   
    
 function MainContainer() {
     return(
        <NavigationContainer>
        <Tab.Navigator
            
           initialRouteName = {homeName}
           screenOptions={({route}) => ({
               tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? "home" : "home-outline"
                    } else if (rn === testsName) {
                        iconName = focused ? "layers" : "layers-outline"
                    } else if( rn === tipsName) {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
               },
               headerShown: false,
               headerTransparent: true,
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#2460FA',
               tabBarInactiveTintColor: 'gray',
           })}>
          <Tab.Screen name={homeName} component={HomeNavigator}  />
          <Tab.Screen name={testsName} component={TestsNavigator} />
          <Tab.Screen name={tipsName} component={TipsNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
     )
 }

 export default MainContainer

