import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const bookings = [
  {
    name: 'Henny Wilson',
    service: 'Bathroom Cleaning',
    status: 'Booked',
    date: '17/1/2024 at 9:00 AM',
    image: require('../../../assets/images/clean1.png'),
  },
  {
    name: 'Brook Shawn',
    service: 'Bathroom Cleaning',
    status: 'Booked',
    date: '31/12/2023 at 9:00 AM',
    image: require('../../../assets/images/clean1.png'),
  },
  {
    name: 'Ronaldo Epric',
    service: 'House Repairing',
    status: 'Booked',
    date: '5/1/2024 at 9:00 AM',
    image: require('../../../assets/images/clean1.png'),
  },
  {
    name: 'Ronaldo Epric',
    service: 'House Repairing',
    status: 'Canceled',
    date: '30/12/2023 at 8:30 AM',
    image: require('../../../assets/images/clean1.png'),
  },
  {
    name: 'Ronaldo Epric',
    service: 'House Repairing',
    status: 'Canceled',
    date: '30/12/2023 at 8:30 AM',
    image: require('../../../assets/images/clean1.png'),
  },
  {
    name: 'Ronaldo Epric',
    service: 'House Repairing',
    status: 'Completed',
    date: '30/12/2023 at 8:30 AM',
    image: require('../../../assets/images/clean1.png'),
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Booked':
      return { backgroundColor: '#D1B2F1', color: '#4B0076' };
    case 'Canceled':
      return { backgroundColor: '#F28B82', color: '#C62828' };
    case 'Completed':
      return { backgroundColor: '#A5D6A7', color: '#1B5E20' };
    default:
      return { backgroundColor: '#E0E0E0', color: '#000' };
  }
};

export default function MyBookings() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {bookings.map((item, index) => {
          const statusStyle = getStatusStyle(item.status);
          return (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.service}>{item.service}</Text>
                <Text style={[styles.statusBadge, {
                  backgroundColor: statusStyle.backgroundColor,
                  color: statusStyle.color,
                }]}>
                  {item.status}
                </Text>
                <View style={styles.dateRow}>
                  <MaterialCommunityIcons name="calendar" size={16} color="#555" />
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
width: screenWidth - 20,
    padding: 13,
    margin:5,
    marginLeft:10,
    marginRight:10,
    borderRadius: 10,

    gap:20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 85,
    height: 75,
    borderRadius: 10,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 13,
    color: '#777',
  },
  service: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  statusBadge: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    marginBottom: 6,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 13,
    marginLeft: 6,
    color: '#333',
  },
});
