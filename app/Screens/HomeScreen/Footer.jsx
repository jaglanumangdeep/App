import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} >
        <Ionicons name="home" size={24} color="#9C27B0" />
        <Text style={styles.footerLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Booking')}>
        <Ionicons name="calendar" size={24} color="#757575" />
        <Text style={styles.footerLabel}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={24} color="#757575" />
        <Text style={styles.footerLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#757575',
  },
});
