import { View,Dimensions, Text,TouchableOpacity,Pressable,Button,SafeAreaView,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';
export default function BoardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.mncon}>
      <View style={styles.obcon1}>
      <Pressable style={{marginTop:hp(3)}}>
      <Ionicons name="arrow-back" size={24} color={colors.black} />
      </Pressable>
      <View style={styles.cardpar}>
        <Image style={styles.card} resizeMode='cover' source={require("../../assets/card.png")}/>
      </View>
      <Text style={styles.oocd}>Order</Text>
      <Text style={styles.oocd2}>our card!</Text>
      <Text style={styles.protext}>
        You can save each time when you {"\n"} are playing with Brighter card!{"\n"}Up to 12% cash back!
      </Text>
      <View style={styles.lmp}>
        <Pressable style={styles.lmbtn} onPress={()=>navigation.navigate("home")}>
            <Text style={styles.lmtext}>Learn more</Text>
        </Pressable>
      </View>
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
        paddingHorizontal:wp(6)
    },
    cardpar:{
        display:"flex",
        alignItems:"center",
        position:"relative",
        top:hp(10),
         },
    card:{
        width:"95%",
        height:hp(30)
    },
    oocd:{
        color:colors.black,
        fontSize:hp(7.5),
        marginTop:hp(13),
        textAlign:"justify",
        fontFamily:fonts.fmedium
    },
    oocd2:{
        color:colors.black,
        fontSize:hp(8),
        textAlign:"justify",
        position:"relative",
        bottom:20,
        fontFamily:fonts.fmedium
    },
    protext:{
        color:colors.gray,
        fontSize:hp(2.5),
        lineHeight:28,
        fontFamily:fonts.fmedium
    },
    lmp:{
        marginTop:hp(4),
        display:"flex",
        alignItems:"center"
    },
    lmbtn:{
        width:"90%",
        backgroundColor:colors.black,
        paddingHorizontal:hp(3),
        paddingVertical:hp(1.8),
        borderRadius:hp(3),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    },
    lmtext:{
        color:colors.white,
        fontSize:hp(2),
        fontFamily:fonts.fsbold
    }
})