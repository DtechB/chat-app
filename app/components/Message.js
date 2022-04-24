import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

function Message({ name, message, avatar, isSender }) {
  if (isSender)
    return (
      <View style={styles.selfContainer}>
        <View style={styles.msgContainerS}>
          <Text style={styles.nameS}>{name}</Text>
          <Text style={{ color: "white" }}>{message}</Text>
        </View>
        <Avatar rounded source={{ uri: avatar }} />
      </View>
    );
  return (
    <View style={styles.container}>
      <Avatar rounded source={{ uri: avatar }} />
      <View style={styles.msgContainerR}>
        <Text style={styles.nameR}>{name}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
  },
  selfContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  msgContainerS: {
    backgroundColor: "#2c6bed",
    color: "white",
    padding: 15,
    borderRadius: 10,
    borderTopRightRadius: 0,
    paddingTop: 5,
    alignItems: "flex-end",
    margin: 10,
    marginTop: 15,
  },
  msgContainerR: {
    backgroundColor: "#ececec",
    padding: 15,
    paddingTop: 5,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    alignItems: "flex-start",
    margin: 10,
    marginTop: 15,
  },
  nameS: {
    fontWeight: "700",
    fontSize: 17,
    color: "white",
    marginBottom: 10,
  },
  nameR: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 10,
  },
});

export default Message;
