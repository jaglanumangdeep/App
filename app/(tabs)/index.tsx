import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../Screens/LoginScreen/Login'; // Make sure the path is correct
import Home from '../Screens/HomeScreen/Home'; // Make sure the path is correct
import DetailScreen from '../Screens/HomeScreen/DetailScreen'; // Make sure the path is correct
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import ServiceDetailScreen from '../Screens/HomeScreen/ServiceDetailScreen'
import CleaningListScreen from '../Screens/HomeScreen/CleaningListScreen'


import Booking from '../Screens/Booking/Booking'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Home/>
      {/* <Booking/> */}
      {/* <DetailScreen/> */}
      {/* <ProfileScreen/> */}
      {/* <ServiceDetailScreen/> */}
      {/* <CleaningListScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});


