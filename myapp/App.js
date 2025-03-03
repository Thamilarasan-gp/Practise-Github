import { StatusBar } from 'expo-status-bar';
import view from 'react-native';
import { StyleSheet, View } from 'react-native';
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Contact/>
      <About/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
