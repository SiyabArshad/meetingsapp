// import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
// import * as React from 'react'
// import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
// import { colors } from '../helpers/colors'
// import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
// import fonts from '../helpers/fonts';
// import { Calendar,CalendarList,Agenda } from 'react-native-calendars';
// import Arrow from './Arrow';
// import { PieChart } from 'react-native-svg-charts';
// export default function PieCharts() {
//     const data = [
//         {
//             key: 1,
//             amount: 30,
//             svg: { fill: colors.black },
//         },
//         {
//             key: 2,
//             amount: 70,
//             svg: { fill: "rgba(0,0,0,0.2)" }
//         }
//     ]
//   return (
//       <PieChart
//       style={{ height: 200,marginTop:10 }}
//       valueAccessor={({ item }) => item.amount}
//       data={data}
//       spacing={0}
//       outerRadius={'95%'}
//               />
//   )
// }

import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';
import { Calendar,CalendarList,Agenda } from 'react-native-calendars';
import Arrow from './Arrow';
import { PieChart } from 'react-native-svg-charts';
import { Image as SvgImage, Defs, Pattern,Line,Circle } from 'react-native-svg';

export default function PieCharts() {
    const data = [
        {
            key: 1,
            amount: 30,
            svg: { 
              fill: colors.black,
              onPress: () => console.log('onPress for segment 1'),
              // add any other SVG props you need here
            },
        },
        {
            key: 2,
            amount: 70,
            svg: { 
              fill: "url(#image)",
              onPress: () => console.log('onPress for segment 2'),
              // add any other SVG props you need here
            }
        }
    ]
  
  return (
    <PieChart
      style={{ height: 200, marginTop: 10,overflow:"hidden",position:"relative"}}
      valueAccessor={({ item }) => item.amount}
      data={data}
      spacing={0}
      outerRadius={'95%'}
    >
<Defs>
<Pattern
      id="image"
      height="200"
      patternUnits="userSpaceOnUse"
    >
     <View style={{height:200,width:"100%",display:"flex",
     justifyContent:"center",alignItems:"center",position:'relative'}}>
    <View style={{height:190,width:190,borderRadius:95,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:180,width:180,borderRadius:90,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:170,width:170,borderRadius:85,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:160,width:160,borderRadius:80,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:150,width:150,borderRadius:75,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:140,width:140,borderRadius:70,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:130,width:130,borderRadius:65,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:120,width:120,borderRadius:60,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:110,width:110,borderRadius:55,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:100,width:100,borderRadius:50,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
</View>
       </Pattern>

      </Defs> 
    </PieChart>
  )
}

{/* <View style={{height:180,display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,position:"relative"}}>
    <View style={{height:180,width:180,borderRadius:90,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:160,width:160,borderRadius:80,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:140,width:140,borderRadius:70,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:120,width:120,borderRadius:60,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:100,width:100,borderRadius:50,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:80,width:80,borderRadius:40,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
    <View style={{height:60,width:60,borderRadius:30,borderWidth:1,borderColor:colors.black,position:"absolute"}}/>
</View> */}