import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListeningData, ReadingData, SpeakingData, WritingData } from "../data/TipsData";



const SpeakingBanner = require( "../assets/img/speaking.png")
const WritingBanner = require("../assets/img/writing.png")
const ListeningBanner = require("../assets/img/listening.png")
const ReadingBanner = require("../assets/img/reading.png")
 function TipsDetails({route,navigation}) {
     const {tipName} = route.params;

     if(tipName ==="speaking"){
         var getTip = SpeakingData;
         var imageBanner = SpeakingBanner
     } else if(tipName ==="writing") {
         var getTip = WritingData;
         var imageBanner = WritingBanner;
     } else if(tipName ==="listening"){
         var getTip = ListeningData;
         var imageBanner = ListeningBanner;
     } else if (tipName ==="reading") {
         var getTip = ReadingData;
         var imageBanner = ReadingBanner;
     }
     return(
       <ScrollView>

           <View>
           <Ionicons name="arrow-back" color="white" size={34} style={{zIndex: 1,marginTop: 20, marginLeft: 18}} onPress={()=> {navigation.navigate("Tips")}}/>
              <Image source={imageBanner} style={{width: "101%", height: 200, marginTop: -60}}/>
           </View>

           <View style={styles.detailsBody}>

               <Text style={styles.detailsHeading}>{getTip.heading}</Text>

               <Text style={styles.detailsIntro}>
                  {getTip.intro}
                </Text>


                <Text style={{color: "black", fontSize: 20, marginTop: 16}}>{getTip.firstTipHeader}</Text>
                <Text style={{fontSize: 18}}>
                {getTip.firstTipText}
                </Text>

                <Text style={{color: "black", fontSize: 20, marginTop: 16}}>{getTip.secondTipHeader}</Text>
                <Text style={{fontSize: 18}}>
                {getTip.secondTipText}
                </Text>

                <Text style={{color: "black", fontSize: 20, marginTop: 16}}>{getTip.thirdTipHeader}</Text>
                <Text style={{fontSize: 18}}>
                {getTip.thirdTipText}
                </Text>

                <Text style={{color: "black", fontSize: 20, marginTop: 16}}>{getTip.fourthTipHeader}</Text>
                <Text style={{fontSize: 18}}>
                {getTip.fourthTipText}
                </Text>

           </View>

       </ScrollView>
     )
 }

 const styles = StyleSheet.create({
     detailsBody: {
         width: "100%",
         height: "auto",
         marginTop: -30,
         paddingHorizontal: 18,
         paddingVertical: 24,
         backgroundColor: "white",  
         borderTopLeftRadius: 20,
         borderTopRightRadius: 20,

     },

     detailsHeading: {
         color: "black",
         fontSize: 24,
         fontWeight: "bold"
     },

     detailsIntro : {
         marginTop: 20,
         fontSize: 20,
     }


 })

 export default TipsDetails