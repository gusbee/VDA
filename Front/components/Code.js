import React from 'react'
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/**
 * PROPS:
 *  question (string)
 *  answer: (string)
 *  handleAnswer (function)
 */

const touches = ['7','8','9','4','5','6','1','2','3','0','Effacer']

export default function Code(props){

    function onTouchPress(touch, answer){
        let newAnswer
        if(touch != 'Effacer'){
            newAnswer = answer + touch
        } else {
            newAnswer = ""
        }
        props.handleAnswer(newAnswer)
    }

    return(
    <>
        {/* THE QUESTION */}
        <Text style={code.question}>
            Quel est le numéro écris sur le banc situé à droite de l'oeuvre ?
        </Text>

        <View>
            
            <View style={code.code}>
                <Text style={code.codeText}>{props.answer}</Text>
            </View>

            <View style={code.panelCommand}>
                {touches.map((touch, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={touch == 'Effacer' ? code.clearTouch : code.numberTouch}
                        onPress={() => onTouchPress(touch, props.answer)}
                    >
                        <Text style={touch == 'Effacer' ? code.clearText : code.numberText}>
                            {touch}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    </>
    )
}

const code = StyleSheet.create({
    question:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    code:{
        width: '100%',
        height: 40,
        backgroundColor: '#707070',
        borderRadius: 5,
        marginVertical: 12,
        justifyContent: "center",        
    },
    codeText:{
        fontFamily: "Gilroy-ExtraBold",
        fontSize: 15,
        color: "#000000",
        paddingHorizontal: 8
    },
    panelCommand:{
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    numberTouch:{
        width: 57,
        height: 41,
        backgroundColor: '#F2EEE3',
        borderRadius: 5,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    clearTouch:{
        width: 135,
        height: 41,
        backgroundColor: 'transparent',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    numberText:{
        fontFamily: "Gilroy-Light",
        fontSize: 15,
        color: "#000000",
    },
    clearText:{
        fontFamily: "Gilroy-Light",
        fontSize: 15,
        color: "#FFFFFF",
    }
})