import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Start from './Start'
import {connect} from 'react-redux'

// Routes du parcours des Vivre de l'art
import Parameters from '../screensVDA/Parameters'
import MapVDA from '../screensVDA/MapVDA'
import Element from '../screensVDA/Element'
import DescriptionElement from '../screensVDA/DescriptionElement'
import Puzzle from '../screensVDA/Puzzle'
import Result from '../screensVDA/Result'
import TakePictureVDA from '../screensVDA/TakePictureVDA'
import End from '../screensVDA/End'

// Routes du parcours Hors les murs
import Missions from '../screensHLM/Missions'
import MapHLM from '../screensHLM/MapHLM'
import Quiz from '../screensHLM/Quiz'
import QuizResult from '../screensHLM/QuizResult'
import TakePictureHLM from '../screensHLM/TakePictureHLM'
import PictureResult from '../screensHLM/PictureResult'
import Reward from '../screensHLM/Reward'

//Route de démarrage de l'application
import Language from '../screensStart/Language'
import StartParameters from '../screensStart/StartParameters'

const Stack = createStackNavigator()
const StartStack = createStackNavigator()
const mapStateToProps = (state) => {
    return {
        language: state.language,
        name: state.name,
        team: state.team
    }
}

function Home(props){
    if(props.team !== ''){
        props.navigation.setOptions({
            tabBarVisible: true
        })
        return(
            
            <Stack.Navigator
                initialRouteName='Start'
                headerMode="float"
                screenOptions={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: '#FCF12D',
                }}
            >
                <Stack.Screen name='Start' component={Start}/>
                <Stack.Screen name='Parameters' component={Parameters}/>
                <Stack.Screen name='MapVDA' component={MapVDA}/>
                <Stack.Screen name='Element' component={Element}/>
                <Stack.Screen name='DescriptionElement' component={DescriptionElement}/>
                <Stack.Screen name='Puzzle' component={Puzzle}/>
                <Stack.Screen name='Result' component={Result}/>
                <Stack.Screen name='TakePictureVDA' component={TakePictureVDA}/>
                <Stack.Screen name='End' component={End}/>
                <Stack.Screen name='Missions' component={Missions}/>
                <Stack.Screen name='MapHLM' component={MapHLM}/>
                <Stack.Screen name='Quiz' component={Quiz}/>
                <Stack.Screen name='QuizResult' component={QuizResult}/>
                <Stack.Screen name='TakePictureHLM' component={TakePictureHLM}/>
                <Stack.Screen name='PictureResult' component={PictureResult}/>
                <Stack.Screen name='Reward' component={Reward}/>
            </Stack.Navigator>
        )
    } else {
        return(
            <StartStack.Navigator
                initialRouteName='Language'
                headerMode="float"
                screenOptions={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: '#FCF12D',
                }}
            >
                <StartStack.Screen name='Language' component={Language} />
                <StartStack.Screen name='StartParameters' component={StartParameters} />
            </StartStack.Navigator>
        )
    }
}

export default connect(mapStateToProps)(Home)