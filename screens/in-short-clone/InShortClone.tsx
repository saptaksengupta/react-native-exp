import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Animated, StatusBar, PanResponder } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NewsDetails } from "./NewsDetails";

const InShortClone = () => {

  const ARTICLES = [
    { id: 1, name: "one"},
    { id: 2, name: "two"},
    { id: 3, name: "three"},
    { id: 4, name: "four"},
    { id: 5, name: "five"},
]

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

const position = new Animated.ValueXY();
const [currentIndex, setCurrentIndex] = useState(0);

const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (e, gestureState) => true,
  onPanResponderMove: (evt, gestureState) => {
    position.setValue({y: gestureState.dy, x: 0});
  },
  onPanResponderRelease: (evt, gestureState) => {
    if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {
      Animated.timing(position, {
        toValue: ({x: 0, y: -winHeight}),
        duration: 400,
        useNativeDriver: false
      }).start(() => {
        const updated = currentIndex + 1;
        setCurrentIndex(updated);
        position.setValue({x: 0, y: 0});
      });
    } else {
      Animated.spring(position, {
        toValue: ({x: 0, y: 0}),
        useNativeDriver: false
      }).start()
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});


const renderArticlesList = () => {
    return ARTICLES.map((item, index) => {
        if (index < currentIndex) {
          return null
        }
        if (currentIndex == index && index < ARTICLES.length - 1) {
          return (
            <NewsDetails key={item.id} item={item} position={position} panResponder={panResponder} />
          ) 
        } else {
          return (<NewsDetails key={item.id} item={item} />)
        }
    }).reverse()
}

  return (
    <View style={styles.container}>
    {renderArticlesList()}
    </View>
  );
};

export default InShortClone;
