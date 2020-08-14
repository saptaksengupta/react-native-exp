import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Animated, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ARTICLES = [
    { id: 1, name: "one"},
    { id: 2, name: "two"},
    { id: 3, name: "three"},
    { id: 4, name: "four"},
    { id: 5, name: "five"},
]

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, 
    position: "absolute", 
    height: winHeight, 
    width: winWidth
  },
});


const renderArticlesList = () => {
    return ARTICLES.map((item, index) => {
        return (
            <View key={item.id} style={styles.container}>
                <View style={{ flex: 2, backgroundColor: "pink" }}></View>
                <View style={{ flex: 3, backgroundColor: "white", padding: 15 }}>
                    <Text>
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy 
                        text Lorem ipsum sum dummy text , 
                        Lorem ipsum sum dummy text. 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text.
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy 
                        text Lorem ipsum sum dummy text , 
                        Lorem ipsum sum dummy text. 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text.
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy 
                        text Lorem ipsum sum dummy text , 
                        Lorem ipsum sum dummy text. 
                        Lorem ipsum sum dummy text Lorem ipsum sum dummy text.
                    </Text>
                </View>
            </View>
        ) 
    })
}

const InShortClone = () => {
  return (
    <View style={styles.container}>
    {renderArticlesList()}
    </View>
  );
};

export default InShortClone;
