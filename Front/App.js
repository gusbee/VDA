import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
// Imports React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//Imports Redux
import { Provider } from 'react-redux'
import Store from './store/configureStore'
// Expo-Fonts
import * as Font from 'expo-font'

import Home from './screens/Home'
import Rewards from './screens/Rewards'
import Profile from './screens/Profile'

// Déclaration des fonts
let customFonts = {
  'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
  'Gilroy-Light': require('./assets/fonts/Gilroy-Light.otf'),
  'Madame': require('./assets/fonts/Madame.ttf'),
  'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
}

const Tab = createBottomTabNavigator()

export default class App extends React.Component{

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    if (this.state.fontsLoaded) {
      return (
        <View style={{flex:1}}>
          <StatusBar hidden={true} />
          <Provider store={Store}>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                  inactiveTintColor:'#373737',
                  activeTintColor: 'yellow',
                  activeBackgroundColor: '#373737',
                  inactiveBackgroundColor: '#000000', 
                  style:{
                    borderTopWidth: 0,
                  },
                  tabStyle:{
                    borderColor: 'black',
                    shadowColor: 'black',
                  }          
                }}
                
              >
                <Tab.Screen name='Home' component={Home} options={{tabBarVisible: false}}/>
                <Tab.Screen name='Rewards' component={Rewards}/>
                <Tab.Screen name='Profile' component={Profile}/>
              </Tab.Navigator>
            </NavigationContainer>
          </Provider>
        </View>
      );
    } else {
      return <AppLoading />
    }
  }
}