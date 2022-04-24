import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  db,
  serverTimestamp,
  auth,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
} from "../../firebase";
import Message from "../components/Message";

function Chat({ navigation, route }) {
  const [message, setMessage] = useState("");
  const [msgData, setMsgData] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.chatName,
      headerTitleAlign: "center",
    });
  }, []);

  const sendMessage = () => {
    Keyboard.dismiss();
    const docRef = collection(db, "chats", route.params.id, "messages");
    addDoc(docRef, {
      timeStamp: serverTimestamp(),
      message,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });
    setMessage("");
  };

  const unsubscribe = async () => {
    const docRef = collection(db, "chats", route.params.id, "messages");
    const q = query(docRef, orderBy("timeStamp"));
    const querySnapshot = await getDocs(q);
    let temp = [];

    querySnapshot.forEach((doc) => {
      temp.push({ id: doc.id, data: doc.data() });
    });

    setMsgData(temp);
  };

  useLayoutEffect(() => {
    unsubscribe();
  }, [message]);

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView keyboardVerticalOffset={90} style={{ flex: 1 }}>
        <>
          <ScrollView style={{ padding: 10 }}>
            {msgData.map(({ id, data }) => (
              <Message
                key={id}
                avatar={data.photoURL}
                name={data.displayName}
                message={data.message}
                isSender={
                  auth.currentUser.displayName === data.displayName
                    ? true
                    : false
                }
              />
            ))}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Write message"
              value={message}
              onChangeText={(msg) => setMessage(msg)}
              style={styles.input}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" color="#2c6bed" size={24} />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ececec",
    borderWidth: 1,
    padding: 10,
    color: "gray",
    borderRadius: 20,
  },
});

export default Chat;
