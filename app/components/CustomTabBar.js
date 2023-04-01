import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { TabBar } from 'react-native-tab-view';
import Svg, { Path, Circle } from 'react-native-svg';

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
  const inputRange = state.routes.map((_, i) => i);
  const translateX = Animated.interpolate(position, {
    inputRange,
    outputRange: inputRange.map((i) => i * 100),
  });

  return (
    <View style={styles.container}>
      <Svg height="70" width="100%" viewBox="0 0 1440 320">
        <Path fill="#0099ff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,208C672,181,768,139,864,133.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        <Circle cx="50%" cy="50" r="30" fill="#fff" />
        <Circle cx="40%" cy="50" r="6" fill="#0099ff" />
        <Circle cx="50%" cy="50" r="6" fill="#0099ff" />
        <Circle cx="60%" cy="50" r="6" fill="#0099ff" />
      </Svg>
      <TabBar
        {...props}
        style={styles.tabBar}
        activeColor="#0099ff"
        inactiveColor="#000"
        renderIcon={({ route, focused, color }) => (
          // Render your tab icons here
        )}
        onTabPress={({ route, preventDefault }) => {
          // Handle tab press event
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 70,
  },
  tabBar: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
});

export default CustomTabBar;
