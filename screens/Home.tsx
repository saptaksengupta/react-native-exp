import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="in-short clone" onPress={() => navigation.navigate('in-short-clone')} />
    </View>
  );
};

export default Home;
