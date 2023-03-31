import { View, Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';

export default function MeetingModal({closemodal}) {
  return (
    <View style={{paddingVertical:hp(2),flex:1}}>
     <View style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",paddingHorizontal:wp(3)}}>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Pressable onPress={()=>closemodal()} style={{height:30,width:30,borderRadius:15,backgroundColor:colors.lightgrey,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <AntDesign name="close" size={20} color="black" />
        </Pressable>
        <Pressable style={{height:30,width:30,borderRadius:15,backgroundColor:colors.lightgrey,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Entypo name="dots-three-vertical" size={20} color="black" />
        </Pressable>
     </View>
     <Text style={{marginVertical:hp(2),marginHorizontal:wp(2),fontSize:28,fontWeight:"bold",color:colors.shark}}>
        School DashBoard IA Breakdown
     </Text>
     <Text style={{marginHorizontal:wp(2),textAlign:"justify",fontSize:16,marginBottom:hp(1),color:colors.shark}}>
        Need to Talk down all the Dashboard content into Proper Information Architecture and make all content Fixed.
     </Text>
     <View style={{marginHorizontal:wp(2),marginTop:hp(2)}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:hp(1.5)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <AntDesign name="calendar" size={20} color={colors.shark} />
                <Text style={{marginLeft:hp(1),fontSize:16}}>Date</Text>
            </View>
            <Text style={{fontWeight:"bold"}}>January 19</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:hp(1.5)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunityIcons name="clock-time-four-outline" size={24} color={colors.shark} />
                <Text style={{marginLeft:hp(1),fontSize:16}}>Time</Text>
            </View>
            <Text style={{fontWeight:"bold"}}>14:00PM-15:00PM</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:hp(1.5)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <MaterialIcons name="notifications-on" size={20} color={colors.shark} />
                <Text style={{marginLeft:hp(1),fontSize:16}}>Notify Before</Text>
            </View>
            <Text style={{fontWeight:"bold"}}>15 Minutes</Text>
        </View>
        
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:hp(1.5)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <AntDesign name="user" size={20} color={colors.shark} />
                <Text style={{marginLeft:hp(1),fontSize:16}}>Host</Text>
            </View>
            <Text style={{fontWeight:"bold"}}>Syamir Kashmiri</Text>
        </View>
        
        
     </View>
     <View style={{marginHorizontal:wp(3),marginVertical:hp(2)}}>
        <Text style={{fontWeight:"bold",fontSize:18,marginBottom:hp(2)}}>Guests(8)</Text>
        
      {
        [1,2,3,4].map((item,i)=>(
            <View key={i} style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:hp(2)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Image style={{height:40,width:40,borderRadius:20}} source={require("../../assets/user1.jpg")}/>
                    <View style={{marginLeft:hp(1)}}>
                        <Text style={{fontWeight:"bold",color:colors.shark}}>Christin Watson</Text>
                        <Text style={{color:colors.brown}}>Attendance Confirmed</Text>
                    </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Ionicons style={{marginRight:hp(1)}} name="call" size={20} color={colors.shark} />
            <MaterialIcons name="message" size={20} color={colors.shark} />
            </View>
        </View>
        ))
      }

     </View>
     </View>
     <View style={styles.btm}>
        <Text style={{marginBottom:hp(1)}}>Attend Meeting?</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Pressable style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.lightgreen,paddingHorizontal:wp(10),
        paddingVertical:hp(1),
        borderRadius:hp(2),
        marginRight:hp(1)
        }}>
            <Text style={{fontWeight:"bold"}}>Yes</Text>
        </Pressable>
        <Pressable style={{display:"flex",justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:colors.brown,paddingHorizontal:wp(10),
        paddingVertical:hp(1),
        borderRadius:hp(2),
        marginRight:hp(1)
        }}>
            <Text style={{fontWeight:"bold"}}>No</Text>
        </Pressable>
        <Pressable style={{display:"flex",justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:colors.brown,paddingHorizontal:wp(10),
        paddingVertical:hp(1),
        borderRadius:hp(2),
        marginRight:hp(1)
        }}>
            <Text style={{fontWeight:"bold"}}>May be</Text>
        </Pressable>
        </View>
     </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btm:{
        minHeight:hp(15),
        paddingHorizontal:hp(3),
        paddingVertical:hp(2),
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#FFFF",
        ...Platform.select({
            android: {elevation: 3},
            ios: {
              shadowColor: '#a8bed2',
              shadowOpacity: 1,
              shadowRadius: 6,
              shadowOffset: {
                width: 2,
                height: 2,
              },
            },
          }),        
    }
})
