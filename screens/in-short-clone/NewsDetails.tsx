import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  StatusBar,
  PanResponder,
} from "react-native";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: "absolute",
    height: winHeight,
    width: winWidth,
  },
});

const NewsDetails = ({ item, position, panResponder }) => {

  return position && panResponder ? (
    <Animated.View
      style={position.getLayout()}
      {...panResponder.panHandlers}
    >
      <View style={styles.container}>
        <View style={{ flex: 2, backgroundColor: "pink" }}></View>
        <View style={{ flex: 3, backgroundColor: "white", padding: 15 }}>
          <Text>
            {item.id} Lorem ipsum sum dummy text Lorem ipsum sum dummy text
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text Lorem ipsum
            sum dummy text , Lorem ipsum sum dummy text. Lorem ipsum sum dummy
            text Lorem ipsum sum dummy text. Lorem ipsum sum dummy text Lorem
            ipsum sum dummy text Lorem ipsum sum dummy text Lorem ipsum sum
            dummy text Lorem ipsum sum dummy text , Lorem ipsum sum dummy text.
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text. Lorem ipsum
            sum dummy text Lorem ipsum sum dummy text Lorem ipsum sum dummy text
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text , Lorem ipsum
            sum dummy text. Lorem ipsum sum dummy text Lorem ipsum sum dummy
            text.
          </Text>
        </View>
      </View>
    </Animated.View>
  ) : (
    <Animated.View>
      <View style={styles.container}>
        <View style={{ flex: 2, backgroundColor: "pink" }}></View>
        <View style={{ flex: 3, backgroundColor: "white", padding: 15 }}>
          <Text>
            {item.id} Lorem ipsum sum dummy text Lorem ipsum sum dummy text
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text Lorem ipsum
            sum dummy text , Lorem ipsum sum dummy text. Lorem ipsum sum dummy
            text Lorem ipsum sum dummy text. Lorem ipsum sum dummy text Lorem
            ipsum sum dummy text Lorem ipsum sum dummy text Lorem ipsum sum
            dummy text Lorem ipsum sum dummy text , Lorem ipsum sum dummy text.
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text. Lorem ipsum
            sum dummy text Lorem ipsum sum dummy text Lorem ipsum sum dummy text
            Lorem ipsum sum dummy text Lorem ipsum sum dummy text , Lorem ipsum
            sum dummy text. Lorem ipsum sum dummy text Lorem ipsum sum dummy
            text.
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export { NewsDetails };
