// // import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
// // import * as React from 'react'
// // import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
// // import { colors } from '../helpers/colors'
// // import { Entypo,Ionicons,AntDesign,MaterialIcons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
// // import { StatusBar } from 'expo-status-bar';
// // import fonts from '../helpers/fonts';
// // import { Calendar,CalendarList,Agenda } from 'react-native-calendars';
// // import Arrow from './Arrow';
// // import { Dimensions } from 'react-native';
// // import data from '../helpers/data.json';

// // import { PieChart } from 'react-native-svg-charts'

// // export default function Test() {

// //   const data = [
// //     {
// //         key: 1,
// //         amount: 50,
// //         svg: { fill: '#600080' },
// //     },
// //     {
// //         key: 2,
// //         amount: 50,
// //         svg: { fill: '#9900cc' }
// //     },
// //     {
// //         key: 3,
// //         amount: 40,
// //         svg: { fill: '#c61aff' }
// //     },
// //     {
// //         key: 4,
// //         amount: 95,
// //         svg: { fill: '#d966ff' }
// //     },
// //     {
// //         key: 5,
// //         amount: 35,
// //         svg: { fill: '#ecb3ff' }
// //     }
// // ]

// // return (
// //  <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
// //      <PieChart
// //         style={{ height: 200 }}
// //         valueAccessor={({ item }) => item.amount}
// //         data={data}
// //         spacing={0}
// //         outerRadius={'95%'}
// //         animate={true}
// //         animationDuration={500}
        
// // >
// //     </PieChart>
// //    </View>
// // )

// // }
// import React from 'react';
// import { View } from 'react-native';
// import Svg, { Circle, Path, Text } from 'react-native-svg';

// const data = {
//   income: [
//     {
//       category: 'Salary',
//       amount: 5000,
//       color: 'green',
//     },
//     {
//       category: 'Investments',
//       amount: 2000,
//       color: 'blue',
//     },
//     {
//       category: 'Rental Income',
//       amount: 1000,
//       color: 'purple',
//     },
//     {
//       category: 'Other',
//       amount: 500,
//       color: 'gray',
//     },
//   ],
//   expenses: [
//     {
//       category: 'Housing',
//       amount: 2000,
//       color: 'red',
//     },
//     {
//       category: 'Transportation',
//       amount: 500,
//       color: 'orange',
//     },
//     {
//       category: 'Food',
//       amount: 1000,
//       color: 'yellow',
//     },
//     {
//       category: 'Utilities',
//       amount: 500,
//       color: 'brown',
//     },
//     {
//       category: 'Entertainment',
//       amount: 500,
//       color: 'pink',
//     },
//     {
//       category: 'Other',
//       amount: 500,
//       color: 'gray',
//     },
//   ],
// };

// const PieChart = () => {
//   const radius = 100;
//   const cx = radius + 10;
//   const cy = radius + 10;
//   const totalIncome = data.income.reduce((a, b) => a + b.amount, 0);
//   const totalExpenses = data.expenses.reduce((a, b) => a + b.amount, 0);

//   let startAngle = 0;
//   const segments = [];

//   data.income.forEach((item, index) => {
//     const endAngle = startAngle + (item.amount / totalIncome) * 360;

//     segments.push(
//       <Path
//         key={`income-${index}`}
//         d={`M${cx},${cy} L${cx + radius},${cy} A${radius},${radius} 0 ${
//           endAngle - startAngle > 180 ? 1 : 0
//         } 1 ${cx + radius * Math.sin((Math.PI * endAngle) / 180)},${
//           cy - radius * Math.cos((Math.PI * endAngle) / 180)
//         } Z`}
//         fill={item.color}
//       />
//     );

//     startAngle = endAngle;
//   });

//   startAngle = 0;

//   data.expenses.forEach((item, index) => {
//     const endAngle = startAngle + (item.amount / totalExpenses) * 360;

//     segments.push(
//       <Path
//         key={`expenses-${index}`}
//         d={`M${cx},${cy} L${cx + radius},${cy} A${radius},${radius} 0 ${
//           endAngle - startAngle > 180 ? 1 : 0
//         } 1 ${cx + radius * Math.sin((Math.PI * endAngle) / 180)},${
//           cy - radius * Math.cos((Math.PI * endAngle) / 180)
//         } Z`}
//         fill={item.color}
//       />
//     );

//     startAngle = endAngle;
//   });

//   return (
//     <View>
//       <Svg width={radius * 2 + 20} height={radius * 2 + 20}>
//         {segments}
//         <Circle cx={cx} cy={cy} r={radius} strokeWidth={10} stroke="white" fill="none" />
     
// </Svg>
// </View>
//   )}



import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-svg-charts'

export default function Test() {
  const data = [
    {
        key: 1,
        value: 50,
        svg: { fill: '#600080' },
        arc: { outerRadius: '130%', cornerRadius: 10,  }
    },
    {
        key: 2,
        value: 50,
        svg: { fill: '#9900cc' }
    },
    {
        key: 3,
        value: 40,
        svg: { fill: '#c61aff' }
    },
    {
        key: 4,
        value: 95,
        svg: { fill: '#d966ff' }
    },
    {
        key: 5,
        value: 35,
        svg: { fill: '#ecb3ff' }
    }
]
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red"}}>
         <PieChart
                style={{ height: 200 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            />
    </View>
  )
}