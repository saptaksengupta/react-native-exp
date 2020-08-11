import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {},
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Page Content!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default Home;
