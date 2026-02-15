import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../HomeScreen/Footer';
import Header from '../HomeScreen/Header';

const categories = [
  {
    label: 'Cleaning',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80',
  },
  {
    label: 'Repairing',
    image:
      'https://images.unsplash.com/photo-1581147036324-c1c9a27f5f06?auto=format&fit=crop&w=300&q=80',
  },
  {
    label: 'Painting',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=300&q=80',
  },
  {
    label: 'Shifting',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=300&q=80',
  },
];

const businesses = [
  {
    image: require('../../../assets/images/clean1.png'),
    title: 'House Cleaning',
    name: 'Jenny Wilson',
    tag: 'Cleaning',
  },
  {
    image: require('../../../assets/images/clean1.png'),
    title: 'Washing Cloths',
    name: 'Emma Potter',
    tag: 'Cleaning',
  },
  {
    image: require('../../../assets/images/clean1.png'),
    title: 'Furniture Repair',
    name: 'Mark Lee',
    tag: 'Repairing',
  },
  {
    image: require('../../../assets/images/clean1.png'),
    title: 'Wall Painting',
    name: 'Anna Ray',
    tag: 'Painting',
  },
  {
    image: require('../../../assets/images/clean1.png'),
    title: 'House Shifting',
    name: 'Shawn Mathew',
    tag: 'Shifting',
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredBusinesses = selectedCategory
    ? businesses.filter((b) => b.tag === selectedCategory)
    : businesses;

  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <Header />
      </View>

      {/* Main Scrollable Content */}
      <ScrollView style={styles.scrollContent}>
        {/* Offers */}
        <Text style={styles.sectionTitle}>Offers For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.offersContainer}>
          <Image source={require('../../../assets/images/clean1.png')} style={styles.offerImage} />
          <Image source={require('../../../assets/images/clean1.png')} style={styles.offerImage} />
        </ScrollView>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.viewAll} onPress={() => setSelectedCategory(null)}>
            View All
          </Text>
        </View>
        <View style={styles.categoryRow}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedCategory(item.label)}>
              <View style={styles.categoryItem}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Latest Business */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest Business</Text>
        </View>
        <View style={styles.businessRow}>
          {filteredBusinesses.map((biz, idx) => (
            <View key={idx} style={styles.businessCard}>
              <Image source={biz.image} style={styles.businessImage} />
              <Text style={styles.businessTitle}>{biz.title}</Text>
              <Text style={styles.businessName}>{biz.name}</Text>
              <Text style={styles.tag}>{biz.tag}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  fixedHeader: {
    position: 'absolute',
    width: '100%',
    // paddingBottom:'10',
    zIndex: 10,
  },
  scrollContent: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: 130, // Enough spacing to fit header + search bar
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', margin: 10 ,paddingTop:'24' },
  offersContainer: { flexDirection: 'row', paddingLeft: 10 },
  offerImage: { width: 250, height: 120, borderRadius: 10, marginRight: 10 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  viewAll: { color: '#9C27B0' },
  categoryRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  categoryItem: { alignItems: 'center' },
  categoryImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#E7D6F3',
  },
  categoryLabel: { marginTop: 4, fontSize: 12 },
  businessRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  businessCard: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  businessImage: { width: '100%', height: 100 },
  businessTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
  },
  businessName: { marginHorizontal: 10, fontSize: 14 },
  tag: {
    backgroundColor: '#E1BEE7',
    alignSelf: 'flex-start',
    marginLeft: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    marginTop: 4,
  },
});
