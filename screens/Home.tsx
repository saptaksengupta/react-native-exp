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

const Home = ({ navigation }: any) => {
  const value = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const moveBall = () => {
    alert(1);
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            transform: [{translateX: value.x}, {translateY: value.y}],
            backgroundColor: "#444",
            borderRadius: 100 / 2,
          }}
        >
        </Animated.View>
      </View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Moave the ball!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
