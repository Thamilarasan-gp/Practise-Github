import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>News App</Text>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to Daily News 📰</Text>
        <Text style={styles.welcomeSubtitle}>Stay updated with the latest headlines</Text>
        
        {/* Date Picker Button */}
        <TouchableOpacity style={styles.dateButton} onPress={() => setOpen(true)}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {/* Date Picker Modal */}
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={(selectedDate) => {
            setOpen(false);
            setDate(selectedDate);
          }}
          onCancel={() => setOpen(false)}
        />
      </View>

      {/* News Feed */}
      <ScrollView style={styles.newsFeed} showsVerticalScrollIndicator={false}>
        <Text style={styles.newsItem}>📢 Breaking News: Sample headline...</Text>
        <Text style={styles.newsItem}>📢 Tech: AI is taking over the world...</Text>
        <Text style={styles.newsItem}>📢 Sports: Your favorite team won!</Text>
        <Text style={styles.newsItem}>📢 Business: Stock market hits record...</Text>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={styles.footerText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  navTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  newsFeed: {
    flex: 1,
    paddingHorizontal: 20,
  },
  newsItem: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 15,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});
