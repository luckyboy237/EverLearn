import * as React from "react";
import { StyleSheet, Text, View } from "react-native";



function SmallThumbnail(props){
    return(
        <View style={styles.smallThumbWrapper}>
        <Text style={{color:"white", fontSize: 16, fontWeight:"700"}}>{props.testName}</Text>
          <Text style={{color:"white", fontSize: 14, fontWeight:"500", marginTop: 10}}>{props.numberOfQuestions}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    smallThumbWrapper: {
        width: "100%",
        height: 140,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,     
        backgroundColor: "#685BFF"
    }
})

export default SmallThumbnail;