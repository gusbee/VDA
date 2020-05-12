import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import TextAndLine from '../components/TextAndLine'

const mapStateToProps = (state) => {
    return {
        team: state.profileReducer.team
    }
}

function Element(props){

    const data = props.route.params.data
    
    return (
        <View style={zones.container}>

            <View style={zones.header}>
                <Text style={style.mainTitle}>Les Vivres de l'Art</Text>
                <Text style={style.subTitle}>{data.title}</Text>
            </View>

            <View style={zones.image}>
                <Image 
                    source={data.image}
                    style={style.image}
                />
                <TextAndLine 
                    text="Je visite les Vivres de l'Art"
                />
            </View>

            <View style={zones.bubble}>
                <Image 
                    source={require('../images/elementsVDA/picasso-bubble.png')}
                    style={style.bubble}
                />
                <Text style={style.team}>{props.team}</Text>
            </View>

            <View>
                <Text style={style.mainResume}>{data.mainResume}</Text>
                <Text style={style.subResume}>{data.subResume}</Text>
            </View>

            <View style={zones.button}>
                <CustomButton 
                    title='Je découvre'
                    disabled={false}
                    action={() => props.navigation.navigate('DescriptionElement', {data: data})}
                />
            </View>
            
        </View>
    )
}

export default connect(mapStateToProps)(Element)

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
    image:{
        
    },
    bubble:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button:{
        width: '100%',
        alignItems: 'center',
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
        fontSize: 42,
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
    },
    subResume:{
        fontFamily: 'Gilroy-Light',
        fontSize: 17,
        color: '#FFFFFF',
        textAlign: 'center',
    }
})