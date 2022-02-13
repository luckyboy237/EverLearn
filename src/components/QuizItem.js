import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function QuizItem(props) {
    return (
        <View style={styles.qItem}>

            <View style={styles.qIcon}>
                <Ionicons name={props.iconName} size={40} color={"white"}/>

            </View>

            <View style={{marginLeft: 20}}>
                <Text style={styles.qTestName}>{props.testName}</Text>
                <Text style={{color:"black", marginTop: 5}}>{props.numberOfQuestions}</Text>
            </View>

           <View style={{marginTop: 4, marginLeft: 0}}>
               <Ionicons name="chevron-forward-outline" size={50} color="#4B4B4B"/>
           </View> 
         
        </View>
    )
}

const styles = StyleSheet.create({
    qItem: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height: 82,
        borderWidth: 1.5,
        borderColor: "#9F9F9F",
        borderRadius: 20,
    },

    qIcon: {
        width: 60,
        height: 60,
        padding: 10,
        backgroundColor: "#8E8BFF",
        borderRadius: 15,
    },

    qTestName: {
        width: 150,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 4
    }
}
)

export default QuizItem