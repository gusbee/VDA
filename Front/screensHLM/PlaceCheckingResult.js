import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'

const mapStateToProps = (state) => {
    return {
        team: state.profileReducer.team
    }
}

const {height} = Dimensions.get('window')

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
            <View style={{width: 211,alignItems: 'center'}}>
                <Text style={style.team}>{props.team}</Text>
                <Image 
                    source={isValid ? (
                        require('../images/elementsVDA/picasso-win.png')
                    ) : (
                        require('../images/elementsVDA/picasso-fail.png')
                    )}
                    style={style.image}
                />
                <View style={{flexDirection:'row'}}>
                    {isValid ? (
                        <Text style={style.light}>
                            Il n'y a pas <Text style={style.bold}>de réussite facile ni d'échec définitif.</Text>
                        </Text>
                    ) : (
                        <Text style={style.light}>
                            <Text style={style.bold}>L'erreur est humaine,</Text> soit; mais il y en a qui poussent <Text style={style.bold}>l'humanité vraiment trop loin.</Text>
                        </Text>
                    )}
                </View>
            </View>

            {/* BUTTON */}
            <View style={zones.button}>
                <CustomButton 
                    title={isValid ? "Prendre une photo" : "Je ne veux pas pousser l'humanité trop loin"}
                    disabled={false}
                    action={() => props.navigation.navigate(
                        'TakePictureHLM', 
                        {
                            missionData: props.route.params.missionData,
                            missionStep: props.route.params.missionStep
                        }
                    )}
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
        backgroundColor: '#000000',
        position: "relative"
    },
    back:{
        position: "absolute",
        top: height / 2
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
        width: '100%',
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        textTransform: 'capitalize',
        textAlign: 'right'
    },
    image:{
        borderRadius: 13,
        marginVertical: 10,
    },
    light:{
        fontFamily: "Gilroy-Light",
        fontSize: 15,
        color: "#FFFFFF"
    },
    bold:{
        fontFamily: "Gilroy-ExtraBold",
        fontSize: 15,
        color: "#FFFFFF"
    },
    backLight:{
        fontFamily: "Gilroy-ExtraBold",
        fontSize: 38,
        color: "#888888",
    }
})