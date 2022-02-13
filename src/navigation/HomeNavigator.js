import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./HomeScreen";
import QuestionScreen from "./QuestionScreen";
import LevelQuestion from "./LevelQuestion";


const Stack = createNativeStackNavigator();

const HomeNavigator = ({navigation, route}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}/>

        <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{headerShown: false}}/>

            <Stack.Screen
            name="LevelQuestion"
            component={LevelQuestion}
            options={{headerShown: false}}/>


        </Stack.Navigator>

        
    )
}

export default HomeNavigator;