import React from "react";
import { StyleSheet, Text, View, Button } from "react-native"; 

const styles = StyleSheet.create({
    container: {
    }
});

const About = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>About Page Content!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
};

export default About;