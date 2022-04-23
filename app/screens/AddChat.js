import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import Icon from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

import Button from "../components/Button";
import { addDoc, collection, db } from "../../firebase";

function AddChat({ navigation }) {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Chats",
    });
  }, []);

  const createChat = async () => {
    await addDoc(collection(db, "chats"), { name: input })
      .then(() => navigation.replace("Home"))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(value) => setInput(value)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon
            name="wechat"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
        }
      />
      <View style={{ width: 200 }}>
        <Button
          text="create new chat"
          backgroundColor="#2c6bed"
          color="white"
          onPress={createChat}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddChat;
