import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import Tips from "./Tips"
import TipsDetails from "./TipDetails"


const Stack = createNativeStackNavigator();

const TipsNavigator = ({navigation, route}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Tips"
            component={Tips}
            options={{headerShown: false}}/>

        <Stack.Screen
            name="TipsDetails"
            component={TipsDetails}
            options={{headerShown: false}}/>
        </Stack.Navigator>

        
    )
}

export default TipsNavigator;