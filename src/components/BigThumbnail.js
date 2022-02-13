import * as React from "react";
import { StyleSheet, Text,View } from "react-native";


function BigThumbnail(props){
    return(
      <View style={styles.bigThumbWrapper}>
          <Text style={{color:"white", fontSize: 16, fontWeight:"700"}}>{props.testName}</Text>
          <Text style={{color:"white", fontSize: 14, fontWeight:"500", marginTop: 10}}>{props.numberOfQuestions}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    bigThumbWrapper: {
        backgroundColor: "#7694FF",
        width: "100%",
        height: 200,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
    }
})

export default BigThumbnail;