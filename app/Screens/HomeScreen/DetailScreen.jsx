// screens/DetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
  const { business } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image source={business.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{business.title}</Text>
        <Text style={styles.name}>{business.name} 🌟</Text>
        <Text style={styles.tag}>{business.tag}</Text>
        <Text style={styles.address}>📍 525 N Tryon Street, NC</Text>

        <Text style={styles.aboutTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookNowBtn}>
          <Text style={{ color: 'white' }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backButton: { position: 'absolute', top: 40, left: 20, zIndex: 1 },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  name: { fontSize: 16, color: '#9C27B0', marginTop: 4 },
  tag: { backgroundColor: '#E1BEE7', alignSelf: 'flex-start', paddingHorizontal: 8, borderRadius: 6, marginTop: 4 },
  address: { marginTop: 8 },
  aboutTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16 },
  aboutText: { marginTop: 4 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  messageBtn: { padding: 12, borderColor: '#9C27B0', borderWidth: 1, borderRadius: 10 },
  bookNowBtn: { padding: 12, backgroundColor: '#9C27B0', borderRadius: 10 },
});
