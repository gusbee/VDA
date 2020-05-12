import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/**
 * PROPS :
 *  step (object),
 *  answer (string),
 *  handleAnsxer (function)
 */

function getTextStyle(answer, element){
    if(answer == element){
        return question.textSelected
    } else {
        if(answer == ''){
            return question.text
        } else {
            return question.textOpacity
        }
    }
}

function getElementStyle(answer, element){
    if(answer == element){
        return question.elementSelected
    } else {
        if(answer == ''){
            return question.element
        } else {
            return question.elementOpacity
        }
    }
}

 export default function Quiz(props){
     return(
        <>
                    
            {/* THE QUESTION */}
            <Text style={question.question}>
                {props.step.checkQuestion}
            </Text>
            
            {/* SUGGESTIONS */}
            <View style={question.suggestions}>

                {props.step.checkElements.map((element, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={getElementStyle(props.answer, element)}
                        onPress={()=>props.handleAnswer(element)}
                    >
                        <Text style={getTextStyle(props.answer, element)}>
                            {element}
                        </Text>
                    </TouchableOpacity>
                ))}
                
            </View>

    </>
    )
}

const question = StyleSheet.create({
    question:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    suggestions:{
        marginTop: 0,
    },
    element:{
        width: 218,
        height: 43,
        backgroundColor: '#202020',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textTransform: 'uppercase'
    },
    elementSelected:{
        width: 218,
        height: 43,
        backgroundColor: '#F2EEE3',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1
    },
    textSelected:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#000000',
        textTransform: 'uppercase',
        opacity: 1,
    },
    elementOpacity:{
        width: 218,
        height: 43,
        backgroundColor: '#101010',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textOpacity:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#474747',
        textTransform: 'uppercase',
    },
})