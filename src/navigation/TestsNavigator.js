import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import TestsScreen from "./Tests";
import QuestionScreen from "./QuestionScreen";
import LevelQuestion from "./LevelQuestion";


const Stack = createNativeStackNavigator();

const TestsNavigator = ({navigation, route}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Tests"
            component={TestsScreen}
            options={{headerShown: false}}/>

        <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{headerShown: false}}/>

        </Stack.Navigator>

        
    )
}

export default TestsNavigator;