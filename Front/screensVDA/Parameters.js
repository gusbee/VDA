import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextAndLine from '../components/TextAndLine'

export default class Parameters extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            how: '',
            qty: '',
        }
    }

    isComplete = () => {
        if(this.state.how != '' && this.state.qty != ''){
            return true
        } else {
            return false
        }
    }

    handleHow = (how) => {
        this.setState({how})
    }

    handleQty = (qty) => {
        this.setState({qty})
    }

    render(){
        return (
            <View style={zones.container}>
                <View style={zones.header}>
                    <Text style={style.mainTitle}>LVDA.</Text>
                    <Text style={style.subTitle}>Tes préférences</Text>
                </View>
                
                <View style={zones.sectionTitle}>
                    <TextAndLine 
                        text='Tu les veux comment ?'
                        uppercase={true}
                    />
                </View>

                <View style={zones.parameters}>
                    <TouchableOpacity
                        onPress={() => this.handleHow('histoire')}
                    >
                    <Image 
                        style={this.state.how == 'histoire' ? (
                            style.image
                        ) : (
                            style.imageGrey
                        )}
                        source={this.state.how == 'histoire' || this.state.how == '' ? (
                            require('../images/parametersVDA/histoire.png')
                        ):(
                            require('../images/parametersVDA/histoire-grey.png')
                        )}
                    />
                    <Text style={style.elementText}>A travers son histoire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.handleHow('anecdotes')}
                    >
                    <Image 
                        style={this.state.how == 'anecdotes' ? (
                            style.image
                        ) : (
                            style.imageGrey
                        )}
                        source={this.state.how == 'anecdotes' || this.state.how == '' ? (
                            require('../images/parametersVDA/anecdotes.png')
                        ):(
                            require('../images/parametersVDA/anecdotes-grey.png')
                        )}
                    />
                    <Text style={style.elementText}>A travers ses anecdotes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleHow('oeuvres')}
                    >
                    <Image 
                        style={this.state.how == 'oeuvres' ? (
                            style.image
                        ) : (
                            style.imageGrey
                        )}
                        source={this.state.how == 'oeuvres' || this.state.how == '' ? (
                            require('../images/parametersVDA/oeuvres.png')
                        ):(
                            require('../images/parametersVDA/oeuvres-grey.png')
                        )}
                    />
                    <Text style={style.elementText}>A travers ses oeuvres</Text>
                    </TouchableOpacity>
                </View>

                <View style={zones.sectionTitle}>
                    <TextAndLine 
                        text='Tu en veux...'
                        uppercase={true}
                    />
                </View>

                <View style={zones.parameters}>
                    <TouchableOpacity 
                        onPress={() => this.handleQty('peu')}
                    >
                        <Image 
                            style={this.state.qty == 'peu' ? (
                                style.image
                            ) : (
                                style.imageGrey
                            )}
                            source={this.state.qty == 'peu' || this.state.qty == '' ? (
                                require('../images/parametersVDA/peu.png')
                            ):(
                                require('../images/parametersVDA/peu-grey.png')
                            )}
                        />
                        <Text style={style.elementText}>Un peu</Text>
                        <Text style={style.elementText}>(30 minutes)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleQty('beaucoup')}
                    >
                        <Image 
                            style={this.state.qty == 'beaucoup' ? (
                                style.image
                            ) : (
                                style.imageGrey
                            )}
                            source={this.state.qty == 'beaucoup' || this.state.qty == '' ? (
                                require('../images/parametersVDA/beaucoup.png')
                            ):(
                                require('../images/parametersVDA/beaucoup-grey.png')
                            )}
                        />
                        <Text style={style.elementText}>Beaucoup</Text>
                        <Text style={style.elementText}>(1 heure)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleQty('folie')}
                    >
                        <Image 
                            style={this.state.qty == 'folie' ? (
                                style.image
                            ) : (
                                style.imageGrey
                            )}
                            source={this.state.qty == 'folie' || this.state.qty == '' ? (
                                require('../images/parametersVDA/folie.png')
                            ):(
                                require('../images/parametersVDA/folie-grey.png')
                            )}
                        />
                        <Text style={style.elementText}>A la folie</Text>
                        <Text style={style.elementText}>(2 heures)</Text>
                    </TouchableOpacity>
                </View>

                <View style={zones.button}>
                    <CustomButton 
                        title='Je valide'
                        disabled={!this.isComplete()}
                        action={() => this.props.navigation.navigate('MapVDA')}
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
    parameters:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionTitle:{
        width: '100%',
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
    image:{
        borderRadius: 13,
        marginBottom: 5,
    },
    imageGrey:{
        borderRadius: 13,
        marginBottom: 5,
        opacity: .3
    },
    elementText:{
        maxWidth: 88,
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})