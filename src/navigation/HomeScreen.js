import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from "react-native-linear-gradient"
import Container from "./GradientContainer";
import QuizItem from "../components/QuizItem.js"


const  Sun = require( "../assets/img/Sun.png")
const  Eicon = require( "../assets/img/eIcon.png")

function HomeScreen({navigation}) {
    return (
    <ScrollView>
         <Container>

        <View style={styles.homeWrapper}>

        <View style={styles.homeHeader}>
         <Image source={Sun}/>
         <Text style={styles.hhText}>Assalomu Alaykum</Text>
         </View>

         <Text style={styles.homeHeadText}>Keling, o'ynaymiz va o'rganamiz</Text>

         <View style={styles.homeRectangle}>
            <Image source={Eicon} style={styles.recImage}/>
             <Text style={styles.recHeading}>DARAJA TESTI</Text>
             <Text style={styles.recParagraph}>Ingliz tilidagi darajangizni shu test orqali bilib oling</Text>
           
            <TouchableOpacity style={styles.recButton}>
                <Text style={styles.rBtnText} onPress={()=> {navigation.navigate("LevelQuestion")}}>Tekshirish</Text>
            </TouchableOpacity>

         </View>

        </View>

        <View style={styles.homeSection}>
             <Text style={styles.homeSectionHeader}>Mashhur testlar</Text>
             
           <Pressable  onPress={()=>{navigation.navigate("Question",  {questionName: "Present Simple"})}}><QuizItem testName={"Present Simple"} numberOfQuestions={"8 Savol"} iconName={"layers-outline"}/></Pressable>
          <Pressable onPress={()=>{navigation.navigate("Question",  {questionName: "Present Simple"})}}>
          <QuizItem testName={"Conditionals"} numberOfQuestions={"8 Savol"} iconName={"fitness-outline"}/>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate("Question", {questionName: "Used To"})}}>
          <QuizItem testName={"Used To"} numberOfQuestions={"8 Savol"} iconName={"hourglass-outline"}/>
          </Pressable>
         </View>
     </Container>
    </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    homeWrapper: {
        marginVertical: 20,
        marginHorizontal: 17
    },


      homeHeader: {
          display: "flex",
          height: 30,
          flexDirection: "row",
      },

      homeHeadText : {
          fontSize: 26, 
          fontWeight: "bold",
          color: "white",
          marginTop: 20
      },

      hhText: {
          fontSize: 16,
          marginLeft: 10,
          color: "white",
          fontWeight: "700",
      },

      homeRectangle: {
          marginTop: 40,
          padding: 40,
          backgroundColor: "white",
          height: 260,
          alignItems: "center",
          borderRadius: 20,

      },
     
      recImage: {
          marginTop: -80,
          width: 140,
          height: 120,
      },

      recHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#14105F",
        marginTop: -15
      },
      recParagraph : {
          textAlign: "center",
          marginTop: 8,
          fontSize: 18, 
          color: "#14105F"
      },

      recButton :{
          padding: 10,
          marginTop: 30,
          width: 190,
          height: 50,
          borderRadius: 30,
          backgroundColor: "#FFB800",
          alignItems: "center"
      },

      rBtnText : {
          fontSize: 17,
          fontWeight: "600",
          color: "black"
      },

      homeSection : {
        width: "100%" ,
        height: "auto",
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white",
        padding: 30,
      },

      homeSectionHeader: {
          color: "black",
          fontSize: 18,
          fontWeight: "bold"
      }

  })

  export default HomeScreen;


