import { View, Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Searchbar() {
  return (
    <View style={{marginHorizontal:wp(3),display:"flex",flexDirection:"row",alignItems:"center",borderBottomWidth:1.2,borderColor:colors.brown
    }}>
    <Ionicons name='search' size={20} color={colors.brown}/>
    <TextInput
    placeholder='Search event,meeting,etc..'
    placeholderTextColor={colors.brown}
    style={{
        paddingHorizontal: 10, paddingVertical:5
    }}
/>
    </View>
  )
}