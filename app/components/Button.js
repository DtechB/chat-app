import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function Button({ onPress, color, backgroundColor, marginBottom, text }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: "100%", borderRadius: 20, marginBottom: marginBottom }}
    >
      <View
        style={{
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: color }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Button;
