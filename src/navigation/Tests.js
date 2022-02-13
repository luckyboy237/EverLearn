import * as React from "react";
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import BigThumbnail from "../components/BigThumbnail"
import SmallThumbnail from "../components/SmallThumbnail"


function TestsScreen({navigation}) {
    return (
    <ScrollView>
      <View style={styles.testsWrapper}>

        <Text
         style={{fontSize: 26, fontWeight: "bold", color: "black"}}>
           Testlar
        </Text>

        <View style={{marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
         
          <View style={styles.firstRow}>
            <View style={{  display: "flex", flexDirection: "column", justifyContent: "space-between",height:720}}>
            <Pressable onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}> 
              <BigThumbnail  testName={"Present Simple"} numberOfQuestions={"8 Savol"}/>
              </Pressable>
          <Pressable onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
          <SmallThumbnail  testName={"Present Continous"} numberOfQuestions={"8 Savol"}/>
          </Pressable >
          <Pressable  onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
          <BigThumbnail  testName={"Advanced Grammar"} numberOfQuestions={"8 Savol"}/>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
          <SmallThumbnail  testName={"Past Simple"} numberOfQuestions={"8 Savol"}/>
          </Pressable>
           </View>   
          </View>

          <View style={styles.secondRow}>
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between",height:720}}>
         <Pressable onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
         <SmallThumbnail  testName={"Used To"} numberOfQuestions={"8 Savol"}/>
         </Pressable>
         <Pressable  onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}> 
         <BigThumbnail  testName={"Vocabulary"} numberOfQuestions={"8 Savol"}/>
         </Pressable>
         <Pressable  onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
         <SmallThumbnail  testName={"Conditionals"} numberOfQuestions={"8 Savol"}/>
         </Pressable>
         <Pressable  onPress={()=>{navigation.navigate("Question", {questionName: "Present Simple"})}}>
         <BigThumbnail  testName={"Reported Speech"} numberOfQuestions={"8 Savol"}/>
         </Pressable>
          </View>
          </View>
        </View>
      </View>
    </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    testsWrapper : {
      paddingTop: 40,
      paddingRight: 30,
      paddingLeft: 30,
      paddingBottom: 60,
      height: "auto",
    },

    firstRow: {
      width: 160,
      height: "auto"
    },

    secondRow: {
      width: 160,
    
    }
  })

  export default TestsScreen;