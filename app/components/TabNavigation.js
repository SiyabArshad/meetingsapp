import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather ,Ionicons,Entypo,MaterialCommunityIcons,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import { colors } from '../helpers/colors';
import Home from '../screens/Home';
import Appointment from '../screens/Appointment';
import MeetingsScreen from '../screens/MeetingsScreen';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
    Pressable,
    Platform
  } from 'react-native';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    const _renderIcon = (routeName, selectedTab) => {
       
        switch (routeName) {
          case 'homeScreen':
                return(
                    <Feather name="home" size={24} color={routeName === selectedTab ?colors.lightwhite:colors.black} /> 
                )
           case 'title2':
            return(
                <Entypo name="pie-chart" size={24} color={routeName === selectedTab ?colors.lightwhite:colors.black} />
            )
            case 'title3':
                return(
                    <MaterialCommunityIcons name="message-text-outline" size={24} color={routeName===selectedTab?colors.lightwhite:colors.black} />
                ) 
            case 'title4':
                return(
                    <FontAwesome name="calendar" size={24} color={routeName === selectedTab ?colors.lightwhite:colors.black} />
                    )
           }
      };
      const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <View  style={styles.tabbarItem}>
          <TouchableOpacity
            onPress={() => navigate(routeName)}
            style={{backgroundColor:routeName===selectedTab?colors.black:colors.lightwhite,paddingHorizontal:7,paddingVertical:5,borderRadius:7}}
          >
            {_renderIcon(routeName, selectedTab)}
          </TouchableOpacity>
          </View>
        );
      };
    
    
  return (

    <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={{}}
        shadowStyle={Platform.OS==='ios'?styles.shawdow:{}}
        height={70}
        circleWidth={60}
        circlePosition='CENTER'
        bgColor={colors.lightwhite}
        initialRouteName="home"
        renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity onPress={()=>navigate("appointment")} style={styles.button}>
                            <MaterialCommunityIcons name="plus" size={30} color={colors.white} />
            </TouchableOpacity>
        </Animated.View>
        )}
        tabBar={renderTabBar}
        screenOptions={{headerShown:false}}
      >
        <CurvedBottomBarExpo.Screen
          name="homeScreen"
          position="LEFT"
          component={Home}
          
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={Home}
          position="LEFT"
        />
        <CurvedBottomBarExpo.Screen
          name="title3"
          position="RIGHT"
          component={Home}
          
        />
        <CurvedBottomBarExpo.Screen
          name="title4"
          component={Home}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
  )
}
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    shawdow: {
      shadowColor: '#DDDDDD',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.black,
      bottom: 25,
      shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 4,
},
shadowOpacity:  0.19,
shadowRadius: 5.62,
elevation: 6

    },
    tabbarItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });