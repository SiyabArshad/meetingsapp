import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MeetingsScreen from './app/screens/MeetingsScreen';
import BoardingScreen from './app/screens/BoardingScreen';
import Home from './app/screens/Home';
import Appointment from './app/screens/Appointment';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';
const Stack = createNativeStackNavigator();
import TabNavigation from './app/components/TabNavigation';
export default function App() {
  LogBox.ignoreAllLogs()
  const [fontsLoaded, error] = Font.useFonts({
    'fbold': require('./assets/fonts/Figtree-Bold.ttf'),
    'fbolditalic': require('./assets/fonts/Figtree-BoldItalic.ttf'),
    'efbold': require('./assets/fonts/Figtree-ExtraBold.ttf'),
    'flight': require('./assets/fonts/Figtree-Light.ttf'),
    'fregular': require('./assets/fonts/Figtree-Regular.ttf'),
    'fmedium': require('./assets/fonts/Figtree-Medium.ttf'),
    'fsbold': require('./assets/fonts/Figtree-SemiBold.ttf'),
  });
  
  return (
      <NavigationContainer>
        <StatusBar translucent backgroundColor='transparent'/>
      <Stack.Navigator initialroute="onboarding" screenOptions={{headerShown:false}} >
        <Stack.Screen name="onboarding" component={BoardingScreen} />
        <Stack.Screen name="home" component={TabNavigation} />
        <Stack.Screen name="appointment" component={Appointment} />
       </Stack.Navigator>
      </NavigationContainer>
      );
}


