import React, {useRef} from 'react';
import {Animated, PanResponder, Platform, StyleSheet, View,ScrollView,Pressable,Text} from 'react-native';
import {WINDOW_HEIGHT} from '../helpers/dimensions';
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.9;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.4;
const MAX_UPWARD_TRANSLATE_Y =
BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 150;
import { colors } from '../helpers/colors';
import MeetingCard from './MeetingCard';
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import HorizontalCalender from './HorizontalCalender';
const DraggableBottomSheet = ({modalopen}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction: 'up' | 'down') => {
    console.log('direction', direction);
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
       <HorizontalCalender/>
        <ScrollView showsVerticalScrollIndicator={false}>
              <MeetingCard modalopen={modalopen} meetingdata={{name:"Checkout Flow\n BrainStroming"}} color={colors.lipurple}/>
              <MeetingCard modalopen={modalopen} meetingdata={{name:"School Dashboard\n IA Breakdown"}} color={colors.skyblue}/>
              <MeetingCard modalopen={modalopen} meetingdata={{name:"Crypto Dashboard\n Project"}} color={colors.lightgreen}/>
              <MeetingCard modalopen={modalopen} meetingdata={{name:"Research Plan for\n web3 App"}} color={colors.gray}/>
              <MeetingCard modalopen={modalopen} meetingdata={{name:"Fixing Figma\n Comments"}} color={colors.orange}/>
              
          </ScrollView>

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
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
    backgroundColor: 'white',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 50,
    height: 6,
    backgroundColor: colors.shark,
    borderRadius: 10,
  },
});

export default DraggableBottomSheet;