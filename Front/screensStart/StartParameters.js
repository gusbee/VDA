import React from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native'
// Redux
import { connect } from 'react-redux'
// Import composants
import Character from '../components/Character'
import CustomButton from '../components/CustomButton'

const { width, height } = Dimensions.get("screen")

class StartParameters extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            team: ''
        }
    }
    
    // Reducer Action
    handleProfile = () => {
        const action = {
            type: "HANDLE_PROFILE", 
            value: {
                language: this.props.route.params.language,
                name: this.state.name,
                team: this.state.team,
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

    handleName = (name) => {
        this.setState({name})
    }

    handleTeam = (team) => {
        this.setState({team})
    }

    render(){
        return (
            <View style={zones.container}>

                <View style={zones.header}>
                    <Text style={style.mainTitle}>Bienvenue</Text>
                    <Text style={style.subTitle}>aux Vivres de l'Art</Text>
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
                        title="C'est parti l'artiste !"
                        disabled={!this.isComplete()}
                        action={() => this.handleProfile()}
                    />
                </View>
                
            </View>
        )
    }
}

export default connect()(StartParameters)

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
        minHeight: width < 400 ? 55 : 75,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 15,
    },
    input:{
        width: '100%',
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
        fontSize: width < 400 ? 40 : 50,
        color: '#F5EA3E',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    subTitle:{
        fontFamily: 'Madame',
        fontSize: width < 400 ? 20 : 25,
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute',
        top: width < 400 ? 40 : 50,
    },
    textInput:{
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: width < 400 ? 32 : 46,
        borderRadius: width < 400 ? 10 : 14,
        fontFamily: 'Gilroy-Light',
        fontSize: width < 400 ? 17 : 20,
        paddingHorizontal: 16,
        marginVertical: 15,
    },
    text:{
        width: '100%',
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: width < 400 ? 17 : 20,
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