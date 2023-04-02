import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';
import Toptab from '../components/Toptab';
import PieChart from '../components/PieChart';
export default function Home() {
  return (
    <SafeAreaView style={styles.mncon}>
        <View style={styles.obcon1}>
            <View style={styles.header}>
                <Pressable>
                <Entypo name="menu" size={40} color={colors.black} />
                </Pressable>
                <Text style={{fontFamily:fonts.fsbold,fontSize:hp(2.5),color:colors.shark}}>Febraury</Text>
                <Pressable style={{position:"relative"}}>
                <FontAwesome name="bell" size={28} color="black" />
                <View style={{position:"absolute",backgroundColor:"red",width:15,height:15,borderRadius:7.5,display:"flex"
                ,justifyContent:"center",alignItems:"center",borderWidth:1.5,borderColor:colors.white,right:0}}>
                    <Text style={{color:colors.white}}>1</Text>
                </View>
                </Pressable>
            </View>
            <Toptab/>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{marginTop:hp(4),display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:colors.black,fontSize:hp(5.5),fontFamily:fonts.fregular}}>$112,100</Text>
                <Text style={{color:colors.gray,fontSize:hp(1.4),fontFamily:fonts.fregular,textAlign:"center"}}>
                    Balance for Febraury, 2020
                </Text>
            </View>
            <PieChart/>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:hp(4)}}>
                <View style={{backgroundColor:colors.black,width:"45%",borderRadius:hp(1),
                paddingHorizontal:hp(2),paddingVertical:hp(2),marginRight:"5%"}}>
               <Ionicons name="ios-exit-outline" size={36} color={colors.white} /> 
                    <Text style={{color:colors.white,fontFamily:fonts.fsbold,fontSize:hp(2.2),marginTop:hp(1)}}>Expenses</Text>
                    <Text style={{color:colors.white,marginTop:3,fontFamily:fonts.fregular}}>44%</Text>
                    <Text style={{color:colors.white,fontSize:hp(2.1),fontFamily:fonts.fregular,marginTop:hp(2)}}>$560</Text>
                </View>
                <View style={{borderWidth:1,borderColor:colors.black,width:"45%",borderRadius:hp(1),paddingHorizontal:hp(2),paddingVertical:hp(2)}}>
                <Ionicons name="ios-enter-outline" size={36} color={colors.black} />
                    <Text style={{color:colors.black,fontFamily:fonts.fsbold,fontSize:hp(2.2),marginTop:hp(1)}}>Income</Text>
                    <Text style={{color:colors.black,marginTop:3,fontFamily:fonts.fregular}}>56%</Text>
                    <Text style={{color:colors.black,fontSize:hp(2.1),fontFamily:fonts.fregular,marginTop:hp(2)}}>$1100</Text>
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
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:hp(1.5),
        marginTop:hp(1.4)
    }
})