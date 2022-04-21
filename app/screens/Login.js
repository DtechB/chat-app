import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Login screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Login;
