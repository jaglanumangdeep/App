import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceDetailScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 1 }}>
        <Image
   source={require('./../../../assets/images/Login1.png')} 
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.serviceTitle}>Bathroom Cleaning</Text>
          <View style={styles.row}>
            <Text style={styles.name}>Henny Wilson 🌟</Text>
            <Text style={styles.tag}>Cleaning</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-sharp" size={16} color="#9C27B0" />
            <Text style={styles.address}>525 N Tryon Street, NC</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.aboutTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            <Text style={{ color: '#9C27B0' }}> Read More</Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={styles.messageText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  image: {
    width: '100%',
    height: 420,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  name: {
    fontSize: 14,
    color: '#9C27B0',
    marginRight: 8,
  },
  tag: {
    backgroundColor: '#F3D9FA',
    color: '#9C27B0',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  address: {
    fontSize: 13,
    marginLeft: 4,
    color: '#444',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  aboutText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  messageBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9C27B0',
    borderRadius: 10,
    paddingVertical: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  bookBtn: {
    flex: 1,
    backgroundColor: '#9C27B0',
    borderRadius: 10,
    paddingVertical: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  messageText: {
    color: '#9C27B0',
    fontWeight: '600',
  },
  bookText: {
    color: '#fff',
    fontWeight: '600',
  },
});
