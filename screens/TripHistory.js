import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TabNavigation from '../components/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function TripHisory() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>

      <Button
      title='Cancel'
      style={{ width: 40 }}
      />

      </View>
      <Text style={{ fontSize: 25, fontWeight: 700, textAlign: "center", marginTop: 10}}>Trip History</Text>

      <NavigationContainer>
      <TabNavigation />
      </NavigationContainer>

      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 50
  },

  list: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
