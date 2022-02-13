import React from "react";
import { Image, StyleSheet, Text, TextPropTypes, View } from "react-native";



const  VecImg = require( "../assets/img/Vector.png")
const  Note = require( "../assets/img/Note_Edit.png")
const HeadPhones = require( "../assets/img/Headphones.png")
const Puzzle = require( "../assets/img/Puzzle.png")
let img;
function TipsItem(props) {

    if(props.iName ==="VecImg"){
        var AdImg = VecImg;
    }else if(props.iName ==="Note") {
        var AdImg = Note
    } else if(props.iName ==="Headphones") {
        var AdImg = HeadPhones;
    } else if(props.iName ==="Puzzle") {
        var AdImg = Puzzle;
    }

    var theBg = props.bgColor
    return(
       <View style={styles.tipsComponentWrapper }>
      
           <View style={{width: 60, height: 60, backgroundColor: theBg, borderRadius: 15,padding: 10}}>
               <Image source={AdImg} style={{ width: 40,height: 40}}/>
           </View>
           
           <View style={{marginLeft: 25}}>
           <Text style={{width: 180,color: 'black', fontWeight: 'bold', fontSize:20}}>{props.label}</Text>
            <Text  style={{color: 'black', fontSize: 16, marginTop: 4}}>4 mins</Text>
           </View>

        
       </View>
    )
}

const styles = StyleSheet.create({
    tipsComponentWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    paddingTop: 15,
    paddingBottom: 18,
    paddingHorizontal: 20,
    height: 90,
    backgroundColor: "#E2E3E5",
    borderRadius: 15,
    }
  
})

export default TipsItem;