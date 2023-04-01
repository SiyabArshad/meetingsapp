import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import { colors } from '../helpers/colors'
import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import fonts from '../helpers/fonts';
import { Calendar,CalendarList,Agenda } from 'react-native-calendars';
import Arrow from './Arrow';
const CalendarComp = () => {
  const [selectedDate, setSelectedDate] = React.useState('');
  const theme = {
    backgroundColor: colors.white,
    calendarBackground: colors.white,
    textSectionTitleColor: colors.gray,
    selectedDayBackgroundColor: colors.black,
    selectedDayTextColor: colors.white,
    todayTextColor: colors.black,
    dayTextColor: colors.black,
    textDisabledColor: colors.gray,
    dotColor: colors.brown,
    selectedDotColor:colors.black,
    arrowColor: colors.black,
    monthTextColor: colors.black,
    textDayFontFamily: fonts.fregular,
    textMonthFontFamily:fonts.fmedium,
    textDayHeaderFontFamily: fonts.fregular,
    textDayFontSize: 16,
    textMonthFontSize: 20,
  };
  
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {};

  // Loop through the dates for the next 30 days and mark each date with a red dot
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = date.toISOString().slice(0, 10);

    markedDates[dateString] = { marked: true, dotColor: 'red' };
  }

  const selectedMarkedDates = {
    [selectedDate]: {
      selected: true,
      customStyles: {
        container: {
          backgroundColor: 'black',
          borderRadius: 0,
        },
        text: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },
  };

  return (
    <View>
    <Calendar
       style={{
        borderWidth:1,
        borderColor:colors.black,
        borderRadius:hp(2),
        overflow:"hidden"
      }}
      markingType={'custom'}
      markedDates={{ ...markedDates, ...selectedMarkedDates }}
      onDayPress={onDayPress}
      arrowStyle={{
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
      }}

      renderArrow={(direction) => (
        <View style={{ backgroundColor: 'black', borderRadius: 5 }}>
          <Arrow  direction={direction} />
        </View>
      )}
      theme={theme}
    />
    </View>
  );
};

export default CalendarComp;
