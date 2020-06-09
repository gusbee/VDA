import React from 'react'
import { View, StatusBar } from 'react-native'
import { AppLoading, SplashScreen } from 'expo'
import { Asset } from 'expo-asset'

// Imports React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Imports Redux
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

// Expo-Fonts
import * as Font from 'expo-font'

// Imports des screens
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
    this._loadFontsAsync()
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./images/start/Splash.png')
    return Asset.fromModule(gif).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
    SplashScreen.hide()
    const images = [require('./images/start/Splash.png')]

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })

    await Promise.all(cacheImages)
    this.setState({ isAppReady: true })
  }

  render(){
    if (this.state.fontsLoaded){
      let persistor = persistStore(Store)
      return (
        <View style={{ flex: 1 }}>
          
          {/* Masque la barre de status */}
          <StatusBar hidden={true} />

          <Provider store={Store}>
            <PersistGate persistor={persistor}>
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
            </PersistGate>
          </Provider>
        </View>
      );
    } else {
      return <AppLoading />
    }
  }
}