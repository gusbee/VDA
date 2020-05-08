import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import CustomButtonReverse from '../components/CustomButtonReverse'
import TextAndLine from '../components/TextAndLine'

const mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

function QuizResult(props){

    const isValid = props.route.params.isValid

    return (
        <View style={zones.container}>

            {/* HEADER */}
            <View style={zones.header}>
                <Text style={style.mainTitle}>
                    {isValid ? 'bravoooo' : 'ooooooh'}
                </Text>
                <Text style={style.subTitle}>
                    {isValid ? 'Tu as trouvé !' : 'Dommage c\'était pas ça...'}
                </Text>
            </View>

            {/* TEAM */}
            <View style={{alignItems: 'center'}}>
                <Text style={style.team}>{props.team}</Text>
                <Image 
                    source={require('../images/elementsVDA/picasso-fail.png')}
                    style={style.image}
                />
                <View style={{flexDirection:'row'}}>
                    <Text style={team.light}>
                        L'erreur est humaine, soit; mais il y en a qui poussent l'humanité trop loin.
                    </Text>
                    <View style={team.line}></View>
                </View>
            </View>

            {/* BUTTON */}
            <View style={zones.button}>
                <CustomButton 
                    title={isValid ? "C'était facile quand même" : "Je ne veux pas pousser l'humanité trop loin"}
                    disabled={false}
                    action={() => props.navigation.navigate('TakePictureHLM')}
                />
            </View>
            
        </View>
    )
}

export default connect(mapStateToProps)(QuizResult)

const zones = StyleSheet.create({
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

const style = StyleSheet.create({
    mainTitle:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 50,
        color:'#F5EA3E',
        textTransform: 'uppercase'
    },
    subTitle:{
        fontFamily: 'Madame',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute',
        top: 50,
    },
    team:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        textTransform: 'capitalize',
        textAlign: 'right'
    },
    image:{
        borderRadius: 13,
        marginVertical: 10,
    }
})

const team = StyleSheet.create({
    light: {
        position: 'relative',
        width: 211,
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        borderColor: 'blue',
        borderWidth:1
    },
    line:{
        height: 1, 
        backgroundColor:'yellow',
    }
})