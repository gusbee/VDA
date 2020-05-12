import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import TextAndLine from '../components/TextAndLine'

const mapStateToProps = (state) => {
    return {
        name: state.profileReducer.name
    }
}

function TakePictureHLM(props){
    return (
        <View style={zones.container}>

                <View style={zones.header}>
                    <Text style={style.mainTitle}>Une photo ?</Text>
                    <Text style={style.subTitle}>Avec la réponse...</Text>
                </View>

            <View style={zones.picture}>
                <View style={picture.borders}>
                    <View style={picture.borderTopBottom}></View>
                    <View style={picture.borderTopBottom}></View>
                </View>

                <View style={picture.borderLeftRight}></View>
                <View style={picture.noBorder}></View>
                <View style={picture.borderLeftRight}></View>

                <View style={picture.borders}>
                    <View style={picture.borderTopBottom}></View>
                    <View style={picture.borderTopBottom}></View>
                </View>

                <View style={{width: 252, marginTop: 10}}>
                    <TextAndLine 
                        text='Immortalise ce moment'
                        uppercase={false}
                    />
                </View>
            </View>

            <View>
                <CustomButton 
                    title='Prendre la photo'
                    disabled={false}
                    action={() => props.navigation.navigate(
                        'PictureResult',
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

export default connect(mapStateToProps)(TakePictureHLM)

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
        minHeight: 75,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 15,
    },
    picture:{
        width: '100%',
        alignItems: 'center',
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
    name: {
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 42,
        color: '#F5EA3E',
        textTransform: 'uppercase'
    },
    light:{
        fontFamily: 'Gilroy-Light',
        fontSize: 20,
        color: '#FFFFFF'
    },
    bold:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        color: '#FFFFFF'
    }
})

const picture = StyleSheet.create({
    borderLeftRight:{
        width: 252,
        height: 84,
        borderColor: '#FCF12D',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    noBorder:{
        width: 252,
        height: 84,
    },
    borders:{
        width: 252,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderTopBottom:{
        height: 1,
        width: 84,
        backgroundColor: '#FCF12D'
    }
})