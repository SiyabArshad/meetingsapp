import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';

export default function Timepicker() {
    const [timepick,settimepick]=React.useState(0)
  return (
    <View>
      <Text style={{marginTop:hp(2),color:colors.black,fontFamily:fonts.fmedium,fontSize:hp(2.1)}}>
            Saturday March,2022
        </Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:hp(2)}}>
                {
                    [0,1,2].map((item,i)=>(
                        <Pressable key={i} onPress={()=>settimepick(item)} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#E8EAEC",
            paddingHorizontal:hp(3),paddingVertical:hp(1.9),marginRight:hp(1),borderWidth:timepick===item?2:1,borderColor:timepick===item?colors.black:colors.gray
            }}>
                    <Text style={{fontFamily:fonts.fsbold,fontSize:hp(2)}}>9:40PM</Text>
                </Pressable>
                    ))
                }
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:hp(2)}}>
        {
                    [3,4,5].map((item,i)=>(
                        <Pressable key={i} onPress={()=>settimepick(item)} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#E8EAEC",
            paddingHorizontal:hp(3),paddingVertical:hp(1.9),marginRight:hp(1),borderWidth:timepick===item?2:1,borderColor:timepick===item?colors.black:colors.gray
            }}>
                    <Text style={{fontFamily:fonts.fsbold,fontSize:hp(2)}}>9:40PM</Text>
                </Pressable>
                    ))
                }

        </View>
    </View>
  )
}