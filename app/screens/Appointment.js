import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';
import Timepicker from '../components/Timepicker';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Calendercomp from '../components/CalenderComp';
export default function Appointment({navigation}) {
    const [selected, setSelected] = React.useState('');
  return (
    <SafeAreaView style={styles.mncon}>
    <View style={styles.obcon1}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:hp(2)}}>
            <Pressable onPress={()=>navigation.navigate("home")}>
            <Ionicons name="chevron-back" size={24} color={colors.black}/>
            </Pressable>
            <Pressable>
            <Feather name="more-vertical" size={24} color={colors.black} />
            </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{textAlign:"center",fontFamily:fonts.fsbold,marginTop:hp(3),marginBottom:hp(2),fontSize:hp(3)}}>Select a Date & Time</Text>
        <Calendercomp/>
        <Timepicker/>
        <View style={{height:1,backgroundColor:colors.gray,marginVertical:hp(2)}}/>
        <View>
            <Text style={{textAlign:"center",fontFamily:fonts.fbold,marginVertical:hp(2),fontSize:hp(3)}}>Booking Summary</Text>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text style={{color:colors.gray,fontFamily:fonts.fsbold,fontSize:hp(2)}}>Saturday,{"\n"}25 March 2022 </Text>
                <Text style={{color:colors.black,fontSize:hp(3),fontFamily:fonts.fsbold}}>$25000</Text>
            </View>
      <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginVertical:hp(2)}}>
      <Pressable style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:colors.black,
        paddingVertical:hp(1.5),borderRadius:hp(3),width:"80%"
        }}>
                    <Text style={{color:colors.white,fontSize:hp(2),fontFamily:fonts.fregular}}>
                        Save Appointment
                    </Text>
                </Pressable>
      </View>
        </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    mncon:{
        flex:1,
        backgroundColor:colors.white,
    },
    obcon1:{
        flex:1,
        backgroundColor:colors.white,
        paddingVertical:hp(2),
        paddingHorizontal:wp(3)
    }
})