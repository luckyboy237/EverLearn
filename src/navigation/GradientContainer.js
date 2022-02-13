import * as React from "react";
import { SafeAreaView ,StyleSheet} from "react-native";
import  LinearGradient from "react-native-linear-gradient";



const Container = ({children}) => {
    return(
        <LinearGradient colors={["#2446E2","#7D3BEA", "#7F2EF2"]} style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    }
})

export default Container;