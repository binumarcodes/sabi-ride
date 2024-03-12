import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 15, fontWeight: 700, textAlign: "left", marginTop: 10}}>January 2023</Text>
      <View style={styles.topList}>

      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 10}}>Julius Berger</Text>
      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 10}}>-----------</Text>
      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 10}}>Central Park</Text>
      <Text style={{ fontSize: 13, fontWeight: 800, textAlign: "left", marginTop: 10}}>NGN 3,100</Text>

      </View>
      <View style={styles.downList}>

      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 0, color: "green"}}>Julius Berger</Text>
      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 10}}>-----------</Text>
      <Text style={{ fontSize: 12, fontWeight: 800, textAlign: "left", marginTop: 10}}>Central Park</Text>
      <Text style={{ fontSize: 13, fontWeight: 800, textAlign: "left", marginTop: 10}}>NGN 3,100</Text>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    
  
    topList: {
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    downList: {
      marginTop: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  });
export default CompletedScreen;
