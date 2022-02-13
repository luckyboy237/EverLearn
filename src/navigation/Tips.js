import * as React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TipsItem from "../components/TIpsItem"


function TipsScreen({navigation}) {
    return (
      <View style={styles.tipsWrapper}>
        <Pressable onPress={()=>{navigation.navigate("TipsDetails", {tipName: "speaking"})}}>
          <TipsItem iName={"VecImg"} label="Speaking" bgColor={"#4176FF"}/>
        </Pressable>
      <Pressable onPress={()=>{navigation.navigate("TipsDetails", {tipName: "writing"})}}>
        <TipsItem iName={"Note"} label="Writing" bgColor={"#FF8197"}/>
        </Pressable>
      <Pressable onPress={()=>{navigation.navigate("TipsDetails", {tipName: "listening"})}}>
        <TipsItem iName={"Headphones"} label="Listening"  bgColor={"#8E8BFF"}/>
        </Pressable>
     <Pressable onPress={()=>{navigation.navigate("TipsDetails", {tipName: "reading"})}}>
       <TipsItem iName={"Puzzle"} label="Reading"  bgColor={"#FF9E67"}/>
       </Pressable>
      </View>
    );
  }


  const styles = StyleSheet.create({
    tipsWrapper: {
      paddingTop: 40,
      paddingRight: 17,
      paddingLeft: 17,
      paddingBottom: 60,
      height: 1000,
      backgroundColor: "white",    }
  })
  export default TipsScreen;