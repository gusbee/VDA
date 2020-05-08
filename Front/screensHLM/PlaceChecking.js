import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {connect} from 'react-redux'

import Quiz from '../components/Quiz'
import Code from '../components/Code'
import CustomButton from '../components/CustomButton'

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

class PlaceChecking extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            mission: this.props.route.params.mission,
            answer: '',
        }
    }

    handleAnswer = (answer) => {
        this.setState({answer})
    }

    isValid = () => {
        if(this.state.answer == this.props.route.params.mission.checkAnswer){
            return true
        } else {
            return false
        }
    }

    getCheckMode = () => {
        switch(this.state.mission.checkMode){
            case 'quiz':
                return (
                    <Quiz 
                        mission={this.state.mission}
                        answer={this.state.answer}
                        handleAnswer={this.handleAnswer}
                    />
                )
                break
            case 'code':
                return <Code />
                break
        }
    }

    render(){
        return (
            
            <View style={zone.container}>

                {/* HEADER */}
                <View style={zone.header}>
                    <Text style={header.name}>{this.props.name}</Text>
                    <Text style={header.light}>je suis sûr que tu te trouves</Text>
                    <Text style={header.bold}>au bon endroit</Text>
                </View>

                {/* QUESTION */}
                <View style={{width: 218}}>
                    
                    {this.getCheckMode()}

                </View>
                
                {/* BUTTON */}
                <View style={zone.button}>
                    <CustomButton 
                        title='Je valide ma réponse'
                        disabled={this.state.answer != '' ? false : true}
                        action={() => this.props.navigation.navigate(
                            'QuizResult', 
                            {isValid: this.isValid()}
                        )}
                    />
                </View>
                
            </View>
        )
    }
}

export default connect(mapStateToProps)(PlaceChecking)

const zone = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000000'
    },
    header:{
        minHeight: 72,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 15,
    },
    button:{
        width: '100%',
        alignItems: 'center',
    },
})

const header = StyleSheet.create({
    name:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 42,
        color:'#F5EA3E',
        textTransform: 'uppercase'
    },
    light:{
        fontFamily: 'Gilroy-Light',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    bold:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
})

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