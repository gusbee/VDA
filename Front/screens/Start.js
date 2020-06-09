import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

import TextAndLine from '../components/TextAndLine'

const { width } = Dimensions.get("screen")

const mapStateToProps = (state) => {
    return {
        name: state.profileReducer.name
    }
}

function Start({name, navigation}){
    return (
        <View style={zones.container}>
            <View style={zones.header}>
                <Text style={style.mainTitle}>Bonjour</Text>
                <Text style={style.subTitle}>{name}</Text>
            </View>
            
            <Text style={style.text}>Quoi de prévu aujourd'hui ?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Parameters')}
            >
                <Image 
                    style={style.image}
                    source={require('../images/start/les-vivres-de-l-art.png')}
                />
                <TextAndLine 
                    text="Je visite les Vivres de l'Art"
                />      
            </TouchableOpacity>
            <Text style={style.text}>ou</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Missions')}
            >
                <Image 
                    style={style.image}
                    source={require('../images/start/hors-les-murs.png')}
                />
                <TextAndLine 
                    text="Parcours dans Bordeaux"
                />
            </TouchableOpacity>
        </View>
    )
}

export default connect(mapStateToProps)(Start)

const zones = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
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
})

const style = StyleSheet.create({
    mainTitle:{
        fontFamily: 'Madame',
        fontSize: width < 400 ? 25 : 30,
        color: '#FFFFFF',
        textTransform: 'uppercase'
    },
    subTitle:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 42,
        color: '#F5EA3E',
        textTransform: 'uppercase',
        position: 'absolute',
        top: 16,
    },
    text:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    image:{
        borderRadius: 13,
        marginBottom: 5,
    }
})