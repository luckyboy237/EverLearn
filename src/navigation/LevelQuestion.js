import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { presentSimple } from "../data/Questions";


function LevelQuestion({navigation}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const[isTrue, setTrue] = useState(false)
    const[theID, setID] = useState()



const selectBtn = (isCorrect, id) => {
        
    console.log(id)
    setID(id)
    console.log(theID)
    
    if(isCorrect) {
        setTrue(true)

    }else {
        setTrue(false)
    }
}


const handleAnswerOptionClick = () => {
    setID()
    if (isTrue) {
        setScore(score + 1);
        setTrue(false)
    
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < presentSimple.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};


var levelScore = ""
if(score == 4){
    levelScore ="Intermediate"
} else if(score <= 3) {
    levelScore = "Elementary"
} else if(score >=1){
    levelScore = "Beginner"
}

return(
    <View style={styles.QuestionScreenBg}>
        <View>
            <View style={styles.backIcon}>
            <Ionicons name="chevron-forward-outline" color="black" size={30}/>
            <Text style={{marginRight: 95, fontSize: 20}}>Present Simple</Text>
            </View>

           
        </View>

        <View>
            {showScore ? (
                <View>
                    <View style={styles.answerSection}>
                        <Text style={styles.answerTextOne}>Sizning Darajangiz</Text>
                        <Text style={styles.answerTextTwo}>{levelScore}</Text>
                    </View>
                    <TouchableOpacity style={styles.menuBtn} onPress={()=> navigation.navigate("Home")}>
                        <Text style={styles.menuBtnText}>Boshqa Testlar</Text>
                    </TouchableOpacity> 
                </View>
            ) : (
                <>
                <View>
                    <Text style={styles.questionCount}>Question {currentQuestion + 1}</Text>
                </View>

                <View>
                    <Text style={styles.questionP}>{presentSimple[currentQuestion].questionText}</Text>
                </View>
                <View style={{marginTop: 40}}>
                          {presentSimple[currentQuestion].answerOptions.map((answerOption)=>(
                            <TouchableOpacity  
                            onPress={()=> selectBtn(answerOption.isCorrect, answerOption.id)} 
                            key={answerOption.id} 
                            style={{width: "100%", height: 60,borderWidth: 2, borderColor: answerOption.id===theID ? "#497CFF" : "black",borderRadius:12, padding: 15, alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{color: "black"}}>
                                    {answerOption.answerText}
                                </Text>
                            </TouchableOpacity>
                          ))}


                      </View>

                      <TouchableOpacity style={styles.nextBtn} onPress={()=>handleAnswerOptionClick()}>
                          <Text style={{fontSize: 20, fontWeight: "600", color: "white"}}>Keyingisi</Text>
                      </TouchableOpacity>
                </>
            )}
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    QuestionScreenBg: {
        padding: 30,
    },
    backIcon : {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    } ,

    questionNameStatus: {
        color: "black",
        fontSize: 20,
        fontWeight: 600,
        marginRight: 70
    },

    questionCount:{
        color: "black",
        fontSize: 16,
        marginTop: 20
    }
    ,

    questionP: {
        color: "black",
        fontSize: 20,
        marginTop: 10
    },

    

    answerSection : {
        width: "100%",
        height: 250,
        paddingVertical: 50,
        paddingHorizontal: 40,
        marginTop: 40,
        borderRadius:25,
        backgroundColor:"#436CFF",
        alignItems: "center",
    },

    answerTextOne: {
        color: "white",
        fontSize: 22, 
        fontWeight: "600"
    },
    answerTextTwo: {
        color: "white",
        fontSize: 35,
        marginTop: 20,
        fontWeight:"800"
    },

    menuBtn: {
        height: 70,
        padding: 15,
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: "center"
    },

    menuBtnText: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",

    },



        nextBtn: {
        height: 60,
        backgroundColor: "#497CFF",
        padding: 15,
        alignItems: "center", 
        borderRadius: 12}
        




})

export default LevelQuestion;