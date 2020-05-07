import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import TextAndLine from '../components/TextAndLine'

const mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

function Element(props){

    const data = props.route.params.data
    
    return (
        <ScrollView
            contentContainerStyle={zones.container}
        >

            <View style={zones.header}>
                <Text style={style.mainTitle}>Les Vivres de l'Art</Text>
                <Text style={style.subTitle}>{data.title}</Text>
            </View>

            <View style={zones.image}>
                <Image 
                    source={data.image}
                    style={style.image}
                />
            </View>

            <View style={zones.description}>
                <TextAndLine 
                    text="Description"
                    uppercase={true}
                />
                <Text style={style.description}>{data.description}</Text>
            </View>

            <View style={zones.bubble}>
                <Image 
                    source={require('../images/elementsVDA/picasso-bubble.png')}
                    style={style.bubble}
                />
                <Text style={style.team}>{props.team}</Text>
            </View>

            <View style={zones.resume}>
                <Text style={style.mainResume}>{data.gameResume}</Text>
            </View>

            <View style={zones.button}>
                <CustomButton 
                    title="Je veux m'amuser"
                    disabled={false}
                    action={() => props.navigation.navigate('Puzzle')}
                />
            </View>

            <View style={zones.button}>
                <CustomButton 
                    title="Je continue"
                    disabled={false}
                    action={() => props.navigation.navigate('Puzzle')}
                />
            </View>
            
        </ScrollView>
    )
}

export default connect(mapStateToProps)(Element)

const zones = StyleSheet.create({
    container:{
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
    image:{
        marginVertical: 15,
    },
    description:{
        marginVertical: 15,
    },
    bubble:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 15,
    },
    resume:{
        marginVertical: 15,
    },
    button:{
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
})

const style = StyleSheet.create({
    mainTitle:{
        fontFamily: 'Madame',
        fontSize: 30,
        color: '#FFFFFF',
    },
    subTitle:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 35,
        color: '#F5EA3E',
        textTransform: 'uppercase',
        position: 'absolute',
        top: 16,
    },
    image:{
        borderColor: '#F5EA3E',
        borderWidth: 3,
        marginBottom: 5,
    },
    description:{
        maxWidth: 300,
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color:'#FFFFFF',
        marginTop: 10,
        lineHeight: 19,
    },
    bubble:{
        width: 70,
        height: 70,
        marginVertical: 4,
    },
    team:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        textTransform: 'capitalize'
    },
    mainResume:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 17,
        color: '#FFFFFF',
        textAlign: 'center',
        maxWidth: 300,
    },
})