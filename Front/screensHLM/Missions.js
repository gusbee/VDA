import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import missions from '../data/missions'
import TextAndLine from '../components/TextAndLine'
import { TouchableOpacity } from 'react-native-gesture-handler'

function getMissionStyle(mission){
    if(mission.status){
        if(mission.done){
            return missionStyle.done
        } else {
            return missionStyle.active
        }
    } else {
        return missionStyle.locked
    }
}

function getMissionStyleText(mission){
    if(mission.status){
        if(mission.done){
            return missionStyle.doneText
        } else {
            return missionStyle.activeText
        }
    } else {
        return missionStyle.lockedText
    }
}

function setMissionDone(done){
    if(done){
        return (
            <Image 
                source={require('../images/icons/big-check-circle.png')}
                style={style.done}
            />
        )
    }
}

export default function Missions({navigation}){
    return (
        <View style={zones.container}>
            <View style={zones.header}>
                <TextAndLine 
                    text='Prêt(e) à te challenger ?'
                    uppercase={true}
                />
                <Text style={style.subTitle}>(et à gagner des récompenses ?)</Text>
            </View>
            <View style={zones.icons}>
                <Text style={style.iconsText}>1</Text>
                <Image 
                    source={require('../images/icons/check-circle.png')}
                    style={style.icons}    
                />
                <Image 
                    source={require('../images/icons/arrow-right.png')}
                    style={style.icons} 
                />
                <Image 
                    source={require('../images/icons/gift.png')}
                    style={style.icons} 
                />
            </View>

            <ScrollView contentContainerStyle={zones.missions}>
                {missions.map((mission, index) => (
                    <View key={index} style={{marginVertical: 10}}>
                        
                        <TouchableOpacity 
                            style={getMissionStyle(mission)}
                            disabled={mission.status ? false : true}
                            onPress={() => navigation.navigate('MapHLM', {mission: mission})}
                        >
                            <Image source={mission.status ? (
                                mission.picture
                            ) : (
                                require('../images/missions/locked.png')
                            )}/>
                        </TouchableOpacity>

                        {setMissionDone(mission.done)}

                        <Text style={getMissionStyleText(mission)}>
                            {mission.title}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

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
        width: '100%',
    },
    icons:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    missions:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    }
})

const style = StyleSheet.create({
    subTitle:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF'
    },
    iconsText:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        color: '#FCF12D',
    },
    icons:{
        marginHorizontal: 4,
    },
    done:{
        width: 40,
        height: 40,
        position: 'absolute',
        top: 128 / 2 - 40 / 2,
        left: 128 / 2 - 40 / 2
    }
})

const missionStyle = StyleSheet.create({
    active:{
        width: 128,
        height: 128,
        backgroundColor: '#F2EEE3',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locked:{
        width: 128,
        height: 128,
        backgroundColor: '#1C1C1C',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    done:{
        width: 128,
        height: 128,
        backgroundColor: '#F2EEE3',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .5
    },
    activeText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 4,
        textAlign: 'center',
    },
    lockedText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 4,
        textAlign: 'center',
        opacity: .3,
    },
    doneText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FCF12D',
        marginTop: 4,
        textAlign: 'center',
        opacity: .5,
    },
})