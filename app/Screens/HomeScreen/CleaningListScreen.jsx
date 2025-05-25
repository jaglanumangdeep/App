import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const DATA = [
  {
    id: '1',
    name: 'Jenny Wilson',
    service: 'House Cleaning',
    address: '255 Grand Park Ave, New York',
    image: 'https://via.placeholder.com/80x80.png?text=HC',
  },
  {
    id: '2',
    name: 'Emma Potter',
    service: 'Washing Cloths',
    address: '525 N Tyron Street, New York',
    image: 'https://via.placeholder.com/80x80.png?text=WC',
  },
  {
    id: '3',
    name: 'Henny Wilson',
    service: 'Bathroom Cleaning',
    address: '525 N Tyron Street, NC',
    image: 'https://via.placeholder.com/80x80.png?text=BC',
  },
  {
    id: '4',
    name: 'Harry Will',
    service: 'Floor Cleaning',
    address: 'Kallie Loop, NC',
    image: 'https://via.placeholder.com/80x80.png?text=FC',
  },
  {
    id: '5',
    name: 'Harry Brook',
    service: 'Garage Cleaning',
    address: '164 Sam Street Road, Chicago',
    image: 'https://via.placeholder.com/80x80.png?text=GC',
  },
];

export default function CleaningListScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ServiceDetail')}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <View style={styles.row}>
          <Ionicons name="location-sharp" size={14} color="#9C27B0" />
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Cleaning</Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 12,
    width: screenWidth - 24,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    color: '#666',
  },
  service: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
});
