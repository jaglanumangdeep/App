import React from 'react';
import { View, Text,TextInput, ScrollView , StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
        <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.username}>Game Play</Text>
        <Ionicons name="bookmark-outline" size={24} color="white" style={styles.bookmark} />
      </View>

      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.input} />
        <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: { backgroundColor: '#9C27B0', padding: 20, paddingTop: 40, position: 'relative' },
  welcome: { color: 'white', fontSize: 16 },
  username: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  bookmark: { position: 'absolute', right: 20, top: 40 },
  searchBar: { backgroundColor: '#9C27B0', flexDirection: 'row', alignItems: 'center', padding: 10 },
  input: { flex: 1, backgroundColor: 'white', padding: 8, borderRadius: 8 },
  searchIcon: { marginLeft: 10 },
});
