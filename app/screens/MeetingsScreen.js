import { View, Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Searchbar from '../components/Searchbar';
import MeetingCard from '../components/MeetingCard';
import DraggableBottomSheet from "../components/DraggableBottomSheet"
import { Modalize } from 'react-native-modalize';
import MeetingModal from '../components/MeetingModal';
export default function MeetingsScreen() {
    const modalizeshareRef = React.useRef(null);
    const onmodalOpen = () => {
        modalizeshareRef.current?.open();
      };
      const onmodalclose = () => {
        modalizeshareRef.current?.close();
      };
  return (
    <View style={styles.mncont}>
            <StatusBar translucent backgroundColor='transparent'/>
            <Modalize  ref={modalizeshareRef} >
                <MeetingModal closemodal={onmodalclose}/>
            </Modalize>
            <TouchableOpacity onPress={()=>onmodalOpen()} style={{position:"absolute",backgroundColor:colors.black,height:60,width:60,borderRadius:30,
            display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",zIndex:999,
            bottom:hp(2)
            ,right:hp(2)
            }}>
            <AntDesign name="plus" size={24} color={colors.white} />
            </TouchableOpacity>
      <View style={styles.header}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Pressable>
            <Entypo name="menu" size={36} color={colors.black} />                
            </Pressable>
            <Text style={{marginLeft:10,fontSize:15,color:colors.brown,fontWeight:"bold"}}>
                Thursday,January 19
            </Text>
            </View>
            <Image resizeMode='cover' style={{height:35,width:35,borderRadius:17.5}} source={require("../../assets/user1.jpg")}/>
      </View>
      <View>
      <Pressable style={styles.clanderbtn}>
        <Text style={{fontWeight:"bold",color:colors.shark,marginRight:15,fontSize:14,textTransform:"uppercase"}}>January 2023</Text>
        <AntDesign name="caretdown" size={10} color="black" />
      </Pressable>
      </View>
<ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal:wp(3),marginTop:hp(1.2) ,marginBottom:hp(3)}}>
            <Text style={{fontWeight:"bold",color:colors.shark,fontSize:hp(5)}}>You Have 6</Text>
            <Text style={{fontWeight:"bold",color:colors.shark,fontSize:hp(5)}}>Meetings Today</Text>
        </View>
    <Searchbar/>
    <View style={{marginHorizontal:wp(3),marginVertical:hp(2)}}>
        <Text style={{marginBottom:5,color:colors.brown,fontWeight:"bold"}}>Closest Meeting</Text>
        <View style={styles.closestmeetingcard}>
            <View style={{width:"70%"}}>
                    <Text style={{fontSize:hp(2.5),fontWeight:"bold",color:colors.shark,marginVertical:5}}>New Project Discussion</Text>
                    <Text style={{color:colors.shark}}>10:00 AM-12:00 PM</Text>
                    <Text style={{color:colors.brown,marginVertical:5}}>Host:Abdul Aziz</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Pressable style={styles.iconwraper}>
                    <Ionicons name="checkmark-sharp" size={24} color={colors.green} />
                    </Pressable>
                    <Pressable style={styles.iconwraper}>
                    <AntDesign name="close" size={24} color="red" />
                    </Pressable>
            </View>
        </View>
    </View>
    </ScrollView>
    <DraggableBottomSheet modalopen={onmodalOpen}/>
    </View>
  )
}

const styles=StyleSheet.create({
    mncont:{
        flex:1,
        backgroundColor:colors.lightbrown,
        position:"relative"
    },
    header:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:hp(7),
    marginHorizontal:wp(3)
},
clanderbtn:{
display:"flex",
alignSelf:"flex-start",
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginHorizontal:wp(3),
marginTop:hp(2),
marginBottom:hp(1),
paddingHorizontal:wp(3),
paddingVertical:hp(.7),
borderWidth:1,
borderColor:colors.brown,
borderRadius:15
},
closestmeetingcard:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:colors.lightgreen,
    paddingHorizontal:wp(4),
    paddingVertical:hp(2),
    borderRadius:8 ,
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

