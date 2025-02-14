import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from "./gallery/Gallery";
import GoogleAuthentication from "./authentication/GoogleAuthentication";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <GoogleAuthentication />
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
