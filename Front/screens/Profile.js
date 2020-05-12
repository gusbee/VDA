import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

// Redux
import {connect} from 'react-redux'

// Import des composants
import Character from '../components/Character'
import CustomButton from '../components/CustomButton'

// Récupération des données depuis le store Redux
const mapStateToProps = (state) => {
    return {
        language: state.profileReducer.language,
        name: state.profileReducer.name,
        team: state.profileReducer.team
    }
}

class Profile extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            language: '',
            name: '',
            team:'',
            isModified: false
        }
    }

    componentDidMount(){
        this.setState({
            language: this.props.language,
            name: this.props.name,
            team: this.props.team
        })
    }

    // Reducer Action
    handleProfile = () => {
        this.setState({
            isModified: true
        })
        const action = {
            type: "HANDLE_PROFILE", 
            value: {
                language: this.state.language,
                name: this.state.name,
                team: this.state.team,
                isModified: false,
            }
        }
        this.props.dispatch(action)
    }

    isComplete = () => {
        if(this.state.name != '' && this.state.team != ''){
            return true
        } else {
            return false
        }
    }

    handleLanguage = (lang) => {
        this.setState({
            language: lang,
            isModified: false
        })
    }

    handleName = (name) => {
        this.setState({name,isModified: false})
    }

    handleTeam = (team) => {
        this.setState({team,isModified: false})
    }

    render(){
        return (
            <View style={zones.container}>
                <View style={zones.header}>
                    <Text style={style.mainTitle}>{this.state.name}</Text>
                    <Text style={style.subTitle}>Des modifications à faire ?</Text>
                </View>
                
                <View style={zones.languages}>
                    <TouchableOpacity
                        onPress={() => {this.handleLanguage('fr')}}
                        style={this.state.language == 'fr' ? style.selectedLang : style.unselectedLang}
                    >
                        <Image 
                            style={this.state.language == 'fr' ? style.selectedFlag : style.flag}
                            source={require('../images/start/fr.png')}
                        />
                        <Text style={this.state.language == 'fr' ? style.selectedFlagText : style.flagText}>
                            "Bonjour"
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.handleLanguage('uk')}}
                        style={this.state.language == 'uk' ? style.selectedLang : style.unselectedLang}
                    >
                        <Image 
                            style={this.state.language == 'uk' ? style.selectedFlag : style.flag}
                            source={require('../images/start/uk.png')}
                        />
                        <Text style={this.state.language == 'uk' ? style.selectedFlagText : style.flagText}>
                            "Hello"
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={zones.input}>
                    <TextInput 
                        style={style.textInput}
                        placeholder='Quel est ton nom ?'
                        placeholderTextColor='#474747'
                        value={this.state.name}
                        onChangeText={this.handleName}
                    />
                </View>
                
                <View style={zones.team}>
                    <Text style={style.text}>Choisis ta team !</Text>
                    
                    <View style={style.characterRow}>
                        <Character 
                            name='picasso'
                            selected={this.state.team}
                            handleTeam={this.handleTeam}
                        />
                        <Character 
                            name='michel-ange'
                            selected={this.state.team}
                            handleTeam={this.handleTeam}
                        />
                    </View>

                    <View style={style.characterRow}>
                        <Character 
                            name='hitchcock'
                            selected={this.state.team}
                            handleTeam={this.handleTeam}
                        />
                        <Character 
                            name='beethoven'
                            selected={this.state.team}
                            handleTeam={this.handleTeam}
                        />
                    </View>
                </View>

                <View style={zones.button}>
                    <CustomButton 
                        title={this.state.isModified ? "C'est modifié !" : "Je modifie"}
                        disabled={!this.isComplete()}
                        action={() => this.handleProfile()}
                    />
                </View>

            </View>
        )
    }
}

export default connect(mapStateToProps)(Profile)

const zones = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
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
    languages:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input:{
        width: '100%'
    },
    team:{
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
    flag:{
        width: 50,
        height: 50,
        marginBottom: 5,
        marginHorizontal: 15,
        borderRadius: 13,
        opacity: .3
    },
    selectedFlag:{
        width: 50,
        height: 50,
        marginBottom: 5,
        marginHorizontal: 15,
        borderRadius: 13,
        borderColor: '#FCF12D',
        borderWidth: 3,
    },
    flagText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        opacity: .3
    },
    selectedFlagText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    textInput:{
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 46,
        borderRadius: 14,
        fontFamily: 'Gilroy-Light',
        fontSize: 20,
        paddingHorizontal: 16,
        marginVertical: 15,
    },
    text:{
        width: '100%',
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        marginVertical: 15,
    },
    characterRow:{
        width: 240,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    }
})