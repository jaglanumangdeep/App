import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const user = {
  name: 'Game Play',
  email: 'gameplayapp007@gmail.com',
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.profileTitle}>Profile</Text>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      {/* Options List */}
      <View style={styles.optionsContainer}>
        <MenuItem icon="home" label="Home" />
        <MenuItem icon="bookmark" label="My Booking" />
        <MenuItem icon="email" label="Contact Us" />
        <MenuItem icon="logout" label="Logout" />
      </View>
    </View>
  );
}

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <MaterialCommunityIcons name={icon} size={24} color="#9C27B0" />
    <Text style={styles.menuText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
    header: { backgroundColor: '#9C27B0', padding: 100, paddingTop: 40, position: 'relative' },

  profileTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    left: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    backgroundColor: '#512DA8',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  email: {
    color: '#e0e0e0',
    fontSize: 14,
    marginTop: 4,
  },
  optionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
    fontWeight: '500',
  },
});
