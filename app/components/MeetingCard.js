import { View, Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function MeetingCard({meetingdata,color,modalopen}) {
  return (
    <Pressable onPress={()=>modalopen()} style={[styles.closestmeetingcard,{backgroundColor:color}]}>
    <View style={{width:"70%"}}>
            <Text style={{fontSize:hp(2.5),fontWeight:"bold",color:colors.shark,marginVertical:5}}>{meetingdata?.name}</Text>
            <Text style={{color:colors.shark,marginVertical:hp(1)}}>10:00 AM-12:00 PM</Text>
    </View>
    <View style={{ width:"30%",display:"flex",flexDirection:"row",alignItems:"center",marginLeft:hp(2),position:"relative",left:wp(-15)}}>
    <Image source={require("../../assets/user1.jpg")} resizeMode='cover' style={{height:40,width:40,borderRadius:20,borderWidth:2,borderColor:colors.white
    ,zIndex:4
    }}/>
    <Image source={require("../../assets/user2.jpg")} resizeMode='cover' style={{height:40,width:40,borderRadius:20,borderWidth:2,borderColor:colors.white
    ,position:"relative",left:-10,zIndex:3
    }}/>
        <Image source={require("../../assets/user3.jpg")} resizeMode='cover' style={{height:40,width:40,borderRadius:20,borderWidth:2,borderColor:colors.white
    ,position:"relative",left:-20,zIndex:2
    }}/>
    <Image source={require("../../assets/user4.jpg")} resizeMode='cover' style={{height:40,width:40,borderRadius:20,borderWidth:2,borderColor:colors.white
    ,position:"relative",left:-30,zIndex:1
    }}/>
    </View>
</Pressable>
  )
}

const styles=StyleSheet.create({
    closestmeetingcard:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:wp(4),
        paddingVertical:hp(2),
        borderRadius:8 ,
        marginHorizontal:wp(3),
        marginBottom:hp(1),
        overflow:"hidden"
        },
        iconwraper:{
            height:40,
            width:40,
            borderRadius:20,
            backgroundColor:colors.white,
            display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:hp(.3)
    
    }
})