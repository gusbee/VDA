import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Import des composants
import CustomButton from '../components/CustomButton'

const { width, height } = Dimensions.get("screen")

export default class Language extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            language: ''
        }
    }

    handleLanguage = (lang) => {
        this.setState({language: lang})
    }

    render(){
        return (
            <View style={zones.container}>
                <View style={{flex: 4, justifyContent: 'center'}}>
                    <Text style={style.bold}>Choisis ta langue</Text>
                    <Text style={style.light}>Choose your language</Text>
                </View>

                <View style={style.language}>
                    <TouchableOpacity
                        onPress={() => {this.handleLanguage('fr')}}
                    >
                        <Image 
                            source={require('../images/start/fr.png')}
                            style={this.state.language == 'fr' ? style.selectedFlag : style.flag}
                        />
                        <Text style={this.state.language == 'uk' ? disabled.flagText : style.flagText}>"Bonjour"</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {this.handleLanguage('uk')}}
                    >
                        <Image 
                            source={require('../images/start/uk.png')}
                            style={this.state.language == 'uk' ? style.selectedFlag : style.flag}
                        />
                        <Text style={this.state.language == 'fr' ? disabled.flagText : style.flagText}>"Hello"</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 4, justifyContent: 'center', alignItems:'center'}}>
                    <CustomButton 
                        title='Commençons'
                        disabled={this.state.language != '' ? false : true}
                        action={() => this.props.navigation.navigate('StartParameters', {language: this.state.language})}
                    />
                </View>
                
            </View>
        )
    }
}

const zones = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
    },
})

const disabled = StyleSheet.create({
    flagText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        opacity: .1
    }
})

const style = StyleSheet.create({
    bold:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: width < 400 ? 25 : 30,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    light:{
        fontFamily: 'Gilroy-Light',
        fontSize: width < 400 ? 17 : 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    language:{
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    flag: {
        width: width < 400 ? 100 : 117,
        height: width < 400 ? 100 : 117,
        margin: 15,
        borderRadius: 13,
        opacity: .3
    },
    selectedFlag: {
        width: width < 400 ? 100 : 117,
        height: width < 400 ? 100 : 117,
        margin: 15,
        borderRadius: 13,
        borderColor: '#FCF12D',
        borderWidth: 4,
    },
    flagText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    }
})