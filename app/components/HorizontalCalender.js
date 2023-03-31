import React,{useState} from 'react'
import {Animated, PanResponder, Platform, StyleSheet, View,ScrollView,Pressable,Text} from 'react-native';
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors';
import moment from 'moment';

export default function HorizontalCalender() {
    /**
     * 0 mean today
     * 1 mean tommorow
     * 2,3,4 up so on
     */
    const[activeday,setactiveday]=useState(0)
    const [currentDate, setCurrentDate] = useState(moment().format('MMMDo'));
    const handleDateClick = (offset) => {
        const newDate = moment().add(offset, 'days').format('MMMDo');
        setCurrentDate(newDate);
        setactiveday(offset)
        console.log(newDate);
      };

  return (
    <View style={{display:"flex",flexDirection:"row",marginVertical:hp(1.5),justifyContent:"center"}}>
    <Pressable onPress={() => handleDateClick(0)} style={{marginLeft:wp(3),position:"relative"}}>
      <Text style={{fontWeight:activeday===0&&"bold",color:activeday===0?colors.shark:colors.gray}}>Today</Text>
      <Text style={{position:"absolute",right:-1,top:-11,fontWeight:activeday===0&&"bold"}}>6</Text>
    </Pressable>
    <Pressable onPress={() => handleDateClick(1)} style={{marginHorizontal:wp(3),position:"relative"}}>
      <Text style={{fontWeight:activeday===1&&"bold",color:activeday===1?colors.shark:colors.gray}}>Tommorow</Text>
      <Text style={{position:"absolute",right:-1,top:-11,fontWeight:activeday===1&&"bold"}}>2</Text>
    </Pressable>
    <Pressable onPress={() => handleDateClick(2)} style={{marginHorizontal:wp(3),position:"relative"}}>
      <Text style={{fontWeight:activeday===2&&"bold",color:activeday===2?colors.shark:colors.gray}}>{moment().add(2, 'days').format('MMMDo')}</Text>
      <Text style={{position:"absolute",right:-1,top:-11,fontWeight:activeday===2&&"bold"}}>4</Text>
    </Pressable>
    <Pressable onPress={() => handleDateClick(3)} style={{marginHorizontal:wp(3),position:"relative"}}>
      <Text style={{fontWeight:activeday===3&&"bold",color:activeday===3?colors.shark:colors.gray}}>{moment().add(3, 'days').format('MMMDo')}</Text>
      <Text style={{position:"absolute",right:-1,top:-11,fontWeight:activeday===2&&"bold"}}></Text>
    </Pressable>
    <Pressable onPress={() => handleDateClick(4)} style={{marginHorizontal:wp(3),position:"relative"}}>
      <Text style={{fontWeight:activeday===4&&"bold",color:activeday===4?colors.shark:colors.gray}}>{moment().add(4, 'days').format('MMMDo')}</Text>
      <Text style={{position:"absolute",right:-1,top:-11,fontWeight:activeday===4&&"bold"}}>6</Text>
    </Pressable>
</View>
  )
}